// import { httpService } from './http.service.js'
import { storageService } from './async-storage.service'

export const orderService = {
    query,
    getById,
    save,
    update,
    remove,
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


// const order = {
//     id: sdflsgflfeg,
//     timeOrder: mongo_id.getTimestemp,
//     checkIn: time,
//     checkOut: time,
//     guestsNumber: {
//         adults: 1,
//         childern: 1,
//         pets: 1,
//         total: 3
//     },
//     stay: {
//         id: ksfmgadfsmg,
//         name: skgjasdgf
//     },
//     guest: {
//         id: fgmpdfsmg,
//         name: fdkmgfmg,
//         img: photo
//     },
//     hostId: {
//         id: fipgjqepgj,
//         name: dflmgdflg,
//         img: photo
//     },
//     totalPrice: 500
// }