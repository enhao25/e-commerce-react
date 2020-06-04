import { createSelector } from 'reselect';

// Used to get a slice of the state, specifically the cart state
const selectCart = state => state.cart;

// Using createSelector makes the function a memorized function
export const selectCartItems = createSelector(
    [selectCart], 
    (cart) => cart.cartItems
)

// Cart hidden value to open and close cart
export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

// To calculate the total quantity on the cart
export const selectCartItemsCount = createSelector(
    [selectCartItems], 
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
)

// 
export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedPrice, cartItem) => accumulatedPrice + (cartItem.quantity * cartItem.price), 0
    )
)