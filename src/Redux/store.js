import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; //Useful but not a must
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer'

const middlewares = [thunk];

// This ensures that our middle only applys when it is in development and not production
// During npm run build, the node_env will change to production
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

// ...middlewares spreads the values from [logger] into applymiddleware
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

// export default { store, persistor };