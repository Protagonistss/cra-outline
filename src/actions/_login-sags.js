import { call, fork, put, take, takeEvery } from "redux-saga/effects";
import { loginApi } from "../swagger/apis/login";

function* loginHandle(action) {
  console.log("action", action);
  yield put({ type: "LOGIN_REQUEST" });
  try {
    const res = yield call(loginApi.login, action.payload);
    const profile = yield call(loginApi.getProfile, res);
    yield put({ type: "LOGIN_SUCCESS", payload: { ...res, ...profile } });
  } catch (err) {
    yield put({ type: "LOGIN_FAIL", payload: err });
  }
}

function* loginSaga() {
  yield takeEvery("loginSaga", loginHandle);
  // take 用法
  //   const action = yield take("loginSaga");
  //   yield fork(loginHandle, action);
}

export default loginSaga;
