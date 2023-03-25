import {  legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";  
import booksReducer from "./books/reducers";
import idReducer from "./detail/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({booksReducer, idReducer})

const store = createStore(rootReducer,
              composeWithDevTools(applyMiddleware(thunk)))

export default store