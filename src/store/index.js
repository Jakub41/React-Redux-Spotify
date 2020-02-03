import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import artistsReducer from "./Reducers/artistsReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({ artistsReducer });
function configureStore() {
  return createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk, logger))
  );
}

const store = configureStore();
export default store;
