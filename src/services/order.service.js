// import { httpService } from './http.service.js'

export const orderService = {
    query,
    getById,
    save,
    update,
    remove,
    // subscribe

}

async function query() {
    return stays = await httpService.get(`order`);
}

async function getById(orderId) {
    return stay = await httpService.get(`order/${orderId}`)
}

function remove(orderId) {
    return httpService.delete(`order/${orderId}`)
}

function save(order) {
    return httpService.post(`order`, order)
}

function update(order) {
    return httpService.put(`order`, order)
}


// const order = {
//     id: sdflsgflfeg,
//     timeOrder: mongo_id.getTimestemp,
//     checkIn: time,
//     checkOut: time,
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