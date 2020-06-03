export const addItemToCart = (cartItems, cartItemToAdd) => {
    // .find returns the first value base on the condition which is 
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id 
            ? {...cartItem, quantity:cartItem.quantity + 1}
            : cartItem)
    } else {
        return [...cartItems, {...cartItemToAdd, quantity: 1}]
    }
}