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