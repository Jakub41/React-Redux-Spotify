import { combineReducers, createStore, applyMiddleware } from "redux";
import artistsReducer from './Reducers/artistsReducer'

import thunk from "redux-thunk";
import logger from 'redux-logger'
const rootReducer = combineReducers({ artistsReducer});
function configureStore() {
    return createStore(rootReducer, {}, applyMiddleware(thunk, logger))
}

const store = configureStore();
export default store;