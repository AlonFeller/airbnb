
const initialState = {
  orders: [],
  order: null,
  openOrderModal: false
}

export function orderReducer(state = initialState, action) {
  var newState = state;
  switch (action.type) {
    case 'SET_ORDERS':
      newState = { ...state, orders: action.orders }
      break;
    case 'SET_ORDER':
      newState = { ...state, order: action.order }
      break;
    case 'ADD_ORDER':
      newState = { ...state, orders: [...state.orders, action.order] }
      break;
    case 'REMOVE_ORDER':
      newState = { ...state, orders: state.orders.filter(order => order._id !== action.orderId) }
      break;
    case 'UPDATE_ORDER':
      newState = {
        ...state, orders: state.orders.map(order =>
          order._id === action.order._id ? action.order : order
        )
      }
      break;
      case 'SET_OPEN_MODAL':
        newState = { ...state, openOrderModal: action.set }
        break;
    default:
    }
    return newState
}
