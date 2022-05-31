import { userService } from '../../services/user.service'
import { orderService } from '../../services/order.service'


export function getActionRemoveOrder(orderId) {
    return { type: 'REMOVE_ORDER', orderId }
}
export function getActionAddOrder(order) {
    return { type: 'ADD_ORDER', order }
}

export function loadOrders() {
    return async dispatch => {
        try {
            const orders = await orderService.query()
            dispatch({
                type: 'SET_ORDERS',
                orders
            })
        } catch (err) {
            console.log('OrderActions: err in loadOrders', err)
        }
    }
}

export function loadOrder(orderId) {
    return async dispatch => {
        try {
            const order = await orderService.getById(orderId)
            dispatch({
                type: 'SET_ORDER',
                order
            })
        } catch (err) {
            console.log('OrderActions: err in loadOrder', err)
        }
    }
}

export function addOrder(order) {
    return async dispatch => {
        try {
            const addedOrder = await orderService.save(order)
            dispatch(getActionAddOrder(addedOrder))
        } catch (err) {
            console.log('OrderActions: err in addOrder', err)
            throw err
        }
    }
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

export function removeOrder(orderId) {
    return async dispatch => {
        try {
            await orderService.remove(orderId)
            dispatch(getActionRemoveOrder(orderId))
        } catch (err) {
            console.log('OrderActions: err in removeOrder', err)
            throw err
        }
    }
}