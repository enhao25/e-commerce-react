import { CartActionTypes } from './cart.types'

// Payload is optional
export const toggleCartHidden = () => ({
    // Always align the type string to the one at the reducer switch case
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})