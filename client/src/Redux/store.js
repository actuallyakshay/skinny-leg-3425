import { legacy_createStore , combineReducers, compose, applyMiddleware } from "redux";
import  thunk from "redux-thunk";
import productReducer from "./products/productReducer";

const rootReducer = combineReducers({
product : productReducer
});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer , createComposer(applyMiddleware(thunk)));