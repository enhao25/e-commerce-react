import { CartActionTypes } from './cart.types'

export const toggleCartHidden = () => ({
    // Always align the type string to the one at the reducer switch case
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})