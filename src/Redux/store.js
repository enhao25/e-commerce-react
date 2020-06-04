import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; //Useful but not a must
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer'

const middlewares = [logger];

// ...middlewares spreads the values from [logger] into applymiddleware
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

// export default { store, persistor };