import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./reducer/user";

const store = createStore(
  combineReducers({ user: userReducer }),
  applyMiddleware(thunk)
);

export default store;
