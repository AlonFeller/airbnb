import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

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

function query() {
    return storageService.query(STORAGE_KEY)
}

function getById(stayId) {
    return storageService.get(STORAGE_KEY, stayId)
}

async function remove (stayId) {
    await storageService.remove(STORAGE_KEY, stayId)
}

async function save (stay) {
    let savedStay
    if (stay._id) {
        savedStay = await storageService.put(STORAGE_KEY, stay)
    } else {
        stay.host = userService.getLoggedinUser()
        savedStay = await storageService.post(STORAGE_KEY, stay)
    }

    return savedStay
}


