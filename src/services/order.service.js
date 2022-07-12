import { httpService } from './http.service.js'

export const orderService = {
    query,
    getById,
    save,
    update,
    remove,
    add

}

const STORAGE_KEY = 'orderDB'

async function query() {
    return await httpService.get(`order`)
}

async function getById(orderId) {
    return await httpService.get(`order/${orderId}`)
}

function remove(orderId) {
    return httpService.delete(`order/${orderId}`)
}

function save(order) {
    return httpService.post(`order`, order)
}

function update(order) {
    return httpService.put(`order/${order._Id}`, order)
}

function add(selectedStay, user, guests, dates, nights) {
    const order = {
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
            name: selectedStay.name,
            imgs: selectedStay.imgUrls
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
        priceForDay: selectedStay.price,
        totalPrice: (selectedStay.price * nights * 1.025).toFixed()
    }
    return order
}