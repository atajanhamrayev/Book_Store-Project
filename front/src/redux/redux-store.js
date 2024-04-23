import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import HomeReducer from "./home-reducer";

let reducers = combineReducers({
  homePage: HomeReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
