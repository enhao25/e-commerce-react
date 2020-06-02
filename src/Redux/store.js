import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; //Useful but not a must

import rootReducer from './root-reducer'

const middlewares = [logger];

// ...middlewares spreads the values from [logger] into applymiddleware
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;