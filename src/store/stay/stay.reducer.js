import { stayService } from "../../services/stay.service";

const initialState = {
    stays: [],
    selectedStay: null,
    addedReveiw: false,
    filterBy: {
        location: '',
        minPrice: 0,
        maxPrice: Infinity,
        tags: []
    }

}

export function stayReducer(state = initialState, action) {
    let newState = state
    let stays

    switch (action.type) {
        case 'SET_STAYS':
            newState = { ...state, stays: action.stays }
            break
        case 'SET_STAY':
            newState = { ...state, selectedStay: action.stay }
            break
        case 'ADD_STAY':
            newState = { ...state, stays: [...state.stays, action.stay] }
            break
        case 'UPDATE_STAY':
            stays = state.stays.map(stay => (stay._id === action.stay._id) ? action.stay : stay)
            newState = { ...state, stays: action.stays }
            break
        case 'REMOVE_STAY':
            newState = { ...state, stays: state.stays.filter(stay => stay._id !== action.stayId) }
            break
        case 'SET_FILTERBY':
            newState ={ ...state, filterBy: action.filterBy }
            break
        case 'LOAD_REVIREWS':
            newState ={ ...state, addedReveiw: action.addedReveiw }
            break
        default:
    }
    return newState
}

