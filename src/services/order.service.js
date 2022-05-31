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

function add(selectedStay , user) {
    const order = {
        id: utilService.makeId(),
        timeOrder: Date.now(),
        checkIn: "",
        checkOut: "",
        guestsNumber: {
            adults: "",
            childern: "",
            pets: "",
            total: ""
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
            name: selectedStay.host.name,
            img: selectedStay.host.pictureUrl
        },
        totalPrice: "500"
    }
    return order
}