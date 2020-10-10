import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from './cartTypes'

const initialState = {
    products: []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT: {
            const result = state.products.find(products => products.id == action.payload[0].id)
            const resultIndex = state.products.findIndex(products => products.id == action.payload[0].id)
            if (result) { //si ya existe el producto en el carrito actualizo la cantidad
                let productsCopy = [... state.products]
                productsCopy[resultIndex] = {...productsCopy[resultIndex], cant: productsCopy[resultIndex].cant + action.payload[0].cant}
                const total = productsCopy.reduce((accum, item) => accum + (parseFloat(item.price) * parseInt(item.cant)), 0)
                return {
                    ... state,
                    products: productsCopy,
                    total: total.toFixed(2)
                }
            } else {
                const total = state.products.reduce((accum, item) => 
                    accum + (parseFloat(item.price) * parseInt(item.cant)), 0) 
                    + (parseFloat(action.payload[0].price) * parseInt(action.payload[0].cant))
                return {
                    ... state,
                    products: [... state.products, ... action.payload],
                    total: total.toFixed(2)
                }
            }
        }

        case UPDATE_PRODUCT: {
            const result = state.products.find(products => products.id == action.payload.id)
            const resultIndex = state.products.findIndex(products => products.id == action.payload.id)
            if (result) { //si ya existe el producto en el carrito actualizo la cantidad
                let productsCopy = [... state.products]
                productsCopy[resultIndex] = {...productsCopy[resultIndex], cant: action.payload.cant}
                const total = productsCopy.reduce((accum, item) => accum + (parseFloat(item.price) * parseInt(item.cant)), 0)
                return {
                    ... state,
                    products: productsCopy,
                    total: total.toFixed(2)
                }
            }
        }

        case DELETE_PRODUCT: {
            const resultIndex = state.products.findIndex(products => products.id == action.payload.id)
            if (resultIndex !== undefined) { //si existe el producto lo elimino
                let productsCopy = [... state.products]
                productsCopy.splice(resultIndex, 1)
                const total = productsCopy.reduce((accum, item) => accum + (parseFloat(item.price) * parseInt(item.cant)), 0)
                return {
                    ... state,
                    products: productsCopy,
                    total: total.toFixed(2)
                }
            }
        }
        default: return state
    }
}

export default cartReducer