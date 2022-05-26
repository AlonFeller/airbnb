import { storageService } from './async-storage.service'
import { utilService } from './util.service'
// import { userService } from './user.service'

const STORAGE_KEY = 'stayDB'
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

async function query() {
    let stays
    stays = await storageService.query(STORAGE_KEY)
    if (!stays.length) {
        stays = require('../assets/data/stay.json')
        storageService.postMany(STORAGE_KEY, stays)
    }
    // console.log('stays from service', stays);
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

async function getBy() {
    const stays = query()
    console.log(stays);
    const cities = await stays.from(new Set(cities))
    return cities
}

