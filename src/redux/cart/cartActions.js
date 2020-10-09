import { ADD_PRODUCT } from './cartTypes'

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}