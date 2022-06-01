// import { httpService } from './http.service.js'
import { now } from 'moment'
import { storageService } from './async-storage.service'
import { utilService } from './util.service'

export const orderService = {
    query,
    getById,
    save,
    update,
    remove,
    add
    // subscribe

}

const STORAGE_KEY = 'orderDB'

async function query() {
    // return orders = await httpService.get(`order`)
    return storageService.query('order')
}

async function getById(orderId) {
    // return order = await httpService.get(`order/${orderId}`)
    return await storageService.get(STORAGE_KEY, orderId)
}

function remove(orderId) {
    // return httpService.delete(`order/${orderId}`)
    storageService.remove(STORAGE_KEY, orderId)
}

function save(order) {
    // return httpService.post(`order`, order)
    return storageService.post(STORAGE_KEY, order)
}

function update(order) {
    // return httpService.put(`order`, order)
    return storageService.put(STORAGE_KEY, order)
}

function add(selectedStay, user, guests, dates, nights) {
    const order = {
        id: utilService.makeId(),
        timeOrder: Date.now(),
        checkIn: dates[0],
        checkOut: dates[1],
        nightsNumber: nights,
        guestsNumber: {
            adults: guests.adults,
            childern: guests.children,
            pets: guests.pets,
            total: (guests.adults + guests.children + guests.pets)
        },
        stay: {
            id: selectedStay._id,
            name: selectedStay.name
        },
        buyer: {
            id: user._id,
            name: user.fullname,
            img: user.imgUrl
        },
        host: {
            id: selectedStay.host._id,
            name: selectedStay.host.fullname,
            img: selectedStay.host.pictureUrl
        },
        totalPrice: (selectedStay.price * nights * 1.025).toFixed()
    }
    return order
}