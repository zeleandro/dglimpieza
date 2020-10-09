import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import cartReducer from './cart/cartReducer'

const store = createStore(cartReducer, applyMiddleware(logger))

export default store
