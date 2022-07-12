import { httpService } from './http.service'

export const stayService = {

    query,
    getById,
    getBy,
    save,
    remove,
}

async function query(filterBy= null) {
    let stays = await httpService.get('stay')

    if (filterBy.minPrice || filterBy.maxPrice) {
        stays = stays.filter( stay => stay.price <= filterBy.maxPrice && stay.price >= filterBy.minPrice )
    }

    if (filterBy.location) {
         const regex = new RegExp(filterBy.location, 'i')
         stays = stays.filter(stay => regex.test(stay.address.city) || regex.test(stay.address.country))
    }


    if (filterBy.tags.length) {
        stays = stays.filter(stay => 
            stay.amenities.filter( tag => filterBy.tags.includes(tag)).length === filterBy.tags.length)
    }

    return stays
}

async function getById(stayId) {
   const stay = await httpService.get(`stay/${stayId}`, {stayId})
    return stay
}

async function remove (stayId) {
    await httpService.delete(`stay/${stayId}`)
    return stayId

}

async function save (stay) {
    let savedStay
    if (stay._id) {
        savedStay = await httpService.put(`stay/${stay._id}`, stay)
    } else {
        savedStay = await httpService.post(`stay`, stay)
    }
    savedStay = savedStay.data

    return savedStay
}

async function getBy() {
    const stays = query()
    console.log(stays);
    const cities = await stays.from(new Set(cities))
    return cities
}

