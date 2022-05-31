// const { createStore, applyMiddleware, combineReducers, compose } = Redux
// const thunk = ReduxThunk.default

import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import { stayReducer } from './stay/stay.reducer'
import { userReducer } from './user/user.reducer.js'
import { headerReducer } from "./header/header.reducer";
// import { reviewReducer } from './review.reducer'
import { orderReducer } from './order/order.reducer.js'
// import { systemReducer } from './system.reducer'

const rootReducer = combineReducers({
    stayModule: stayReducer,
    userModule: userReducer,
    headerModule: headerReducer,
    // systemModule: systemReducer,
    orderModule: orderReducer,
    // reviewModule: reviewReducer,
})


// export const store = createStore(rootReducer, applyMiddleware(thunk))
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();
// Lets wire up thunk and also redux-dev-tools:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
// export const store = createStore(rootReducer, applyMiddleware(thunk))


