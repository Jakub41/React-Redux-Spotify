import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import artistsReducer from "./Reducers/artistsReducer";
import LibraryReducer from './Reducers/LibraryReducer'
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({ artistsReducer, LibraryReducer });
function configureStore() {
  return createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk, logger))
  );
}

const store = configureStore();
export default store;
