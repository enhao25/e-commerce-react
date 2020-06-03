import { createSelector } from 'reselect';

// Used to get a slice of the state, specifically the cart state
const selectCart = state => state.cart;

// Using createSelector makes the function a memorized function
export const selectCartItems = createSelector(
    [selectCart], 
    (cart) => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems], 
    cartItems => cartItems.reduce(
        (accumaltedQuantity, cartItem) => accumaltedQuantity + cartItem.quantity, 0)
)