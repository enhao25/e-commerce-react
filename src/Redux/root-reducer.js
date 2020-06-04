import { combineReducers } from 'redux';

import userReducer from './user/user-reducer';
import cartReducer from './cart/cart.reducer';

// This is where we name our states
export default combineReducers({
    user: userReducer,
    cart: cartReducer
})