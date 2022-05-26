import { stayService } from '../../services/stay.service'
import { userService } from '../../services/user.service'
import { showSuccessMsg, showErrorMsg } from '../../services/event-bus.service'



export function getActionRemoveStay(stayId) {
    return {
        type: 'REMOVE_STAY',
        stayId
    }
}

export function getActionAddStay(stay) {
    return {
        type: 'ADD_STAY',
        stay
    }
}

export function getActionUpdateStay(stay) {
    return {
        type: 'UPDATE_STAY',
        stay
    }
}


export function loadStays() {
    return async (dispatch) => {
        try {
            const stays = await stayService.query()
            console.log('Stays from DB:', stays)
            dispatch({
                type: 'SET_STAYS',
                stays
            })
        }
        catch (err) {
            showErrorMsg('Cannot load stays')
            console.log('Cannot load stays', err)
        }

        // if (subscriber) stayService.unsubscribe(subscriber)
        // subscriber = (ev) => {
        //     console.log('Got notified', ev.data)
        //     dispatch(ev.data)
        // }
        // stayService.subscribe(subscriber)
    }
}

export function loadStay(stayId) {
    return async (dispatch) => {
        try {
            const stay = await stayService.getById(stayId)
            console.log('Stay from DB:', stay)
            dispatch({
                type: 'SET_STAY',
                stay
            })
        }
        catch (err) {
            showErrorMsg('Cannot load stay')
            console.log('Cannot load stay', err)
        }
    }
}

export function addStay(stay) {
    return async (dispatch) => {
        try {
            await stayService.save(stay)
            console.log('Added Stay', stay);
            dispatch(getActionAddStay(stay))
            showSuccessMsg('Stay added')
        }
        catch (err) {
            showErrorMsg('Cannot add stay')
            console.log('Cannot add stay', err)
        }
    }
}

export function removeStay(stayId) {
    return async (dispatch) => {
        try {
            await stayService.remove(stayId)
            console.log('Deleted Succesfully!');
            dispatch(getActionRemoveStay(stayId))
            showSuccessMsg('Stay removed')
        } catch (err) {
            showErrorMsg('Cannot remove stay')
            console.log('Cannot remove stay', err)
        }
    }
}

export function updateStay(stay) {
    return async (dispatch) => {
        try {
            await stayService.save(stay)
            console.log('Updated Stay:', stay);
            dispatch(getActionUpdateStay(stay))
            showSuccessMsg('Stay updated')
        }
        catch (err) {
            showErrorMsg('Cannot update stay')
            console.log('Cannot save stay', err)
        }
    }
}