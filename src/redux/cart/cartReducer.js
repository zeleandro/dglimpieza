import { ADD_PRODUCT } from './cartTypes'

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
                return {
                    ... state,
                    products: productsCopy
                }
            } else {
                return {
                    ... state,
                    products: [... state.products, ... action.payload]
                }
            }
        }
        default: return state
    }
}

export default cartReducer