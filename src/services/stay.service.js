import { storageService } from './async-storage.service'
import { utilService } from './util.service'
// import { userService } from './user.service'

const STORAGE_KEY = 'stayDB'
// const stayChannel = new BroadcastChannel('stayChannel')

export const stayService = {

    query,
    getById,
    save,
    remove,
    // addReview,
    // removeReview
}

async function query(filterBy) {
    let stays
    stays = await storageService.query(STORAGE_KEY)
    if (!stays.length) {
        stays = require('../assets/data/stay.json')
        storageService.postMany(STORAGE_KEY, stays)
    }
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
    return await storageService.get(STORAGE_KEY, stayId)
}

async function remove (stayId) {
    await storageService.remove(STORAGE_KEY, stayId)
}

async function save (stay) {
    let savedStay
    if (stay._id) {
        savedStay = await storageService.put(STORAGE_KEY, stay)
    } else {
        // stay.host = userService.getLoggedinUser()
        savedStay = await storageService.post(STORAGE_KEY, stay)
    }

    return savedStay
}


