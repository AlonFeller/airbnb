import { storageService } from './async-storage.service'
import { utilService } from './util.service'
// import { userService } from './user.service'
import { httpService } from './http.service'

import axios from 'axios'

const STORAGE_KEY = 'stayDB'
const BASE_URL = 'http://localhost:3030/api/stay'
// const stayChannel = new BroadcastChannel('stayChannel')

export const stayService = {

    query,
    getById,
    getBy,
    save,
    remove,
    // addReview,
    // removeReview
}

async function query(filterBy= null) {
    // stays = await storageService.query(STORAGE_KEY)
    // labels???
    // const url = `?location=${filterBy.location}&minPrice=${filterBy.minPrice}&maxPrice=${filterBy.maxPrice}`
    // const url = `?location=${filterBy.location}`
    const url = ``
    const res = await axios.get(BASE_URL + url)
    let stays = res.data
    console.log('res', res);
    
    if (!filterBy) return stays
    if (filterBy.location) {
        const regex = new RegExp(filterBy.location, 'i')
        stays = stays.filter( stay => regex.test(stay.address.city) || regex.test(stay.address.country))
    }

    if (filterBy.minPrice || filterBy.maxPrice) {
        stays = stays.filter( stay => stay.price <= filterBy.maxPrice && stay.price >= filterBy.minPrice )
    }

    if (filterBy.tags.length) {
        stays = stays.filter(stay => 
            stay.amenities.filter( tag => filterBy.tags.includes(tag)).length === filterBy.tags.length)
    }

    return stays
}

async function getById(stayId) {
    // return await storageService.get(STORAGE_KEY, stayId)
   const stay = await httpService.get(`stay/${stayId}`, {stayId})
   console.log('stay from get by id', stay);
    return stay
}

async function remove (stayId) {
    // await storageService.remove(STORAGE_KEY, stayId)
    await httpService.delete(`stay/${stayId}`)
    // stayChannel.postMessage(getActionRemoveToy(stayId))
    return stayId

}

async function save (stay) {
    let savedStay
    if (stay._id) {
        // savedStay = await storageService.put(STORAGE_KEY, stay)
        savedStay = await httpService.put(`stay/${stay._Id}`, stay)
    } else {
        savedStay = await httpService.put(`stay`, stay)
        // stay.host = userService.getLoggedinUser()
        // savedStay = await storageService.post(STORAGE_KEY, stay)
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

