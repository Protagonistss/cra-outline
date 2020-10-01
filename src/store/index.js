import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./reducer/user";
import createSagaMiddleware from "redux-saga";
import _loginSaga from "../actions/_login-sags";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ user: userReducer }),
  // applyMiddleware(thunk)
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(_loginSaga);

export default store;
