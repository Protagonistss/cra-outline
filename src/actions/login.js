import { loginApi } from "../swagger/apis/login";

export async function loginAction(dispatch, userInfo) {
  dispatch({ type: "LOGIN_REQUEST" });
  const res = await login(userInfo, dispatch);
  console.log("resres", res);
  getProfile(dispatch, res);
}

async function login(userInfo, dispatch) {
  console.log("userinfoinfo", userInfo);
  return await loginApi.login(userInfo).then(
    (res) => {
      console.log("inner", res);
      return res;
      // dispatch({ type: "LOGIN_SUCCESS", payload: res });
    },
    (err) => {
      dispatch({ type: "LOGIN_FAIL", payload: err });
    }
  );
}

async function getProfile(dispatch, userInfo) {
  await loginApi.getProfile(userInfo).then(
    (res) => {
      dispatch({ type: "LOGIN_SUCCESS", payload: res });
    },
    (err) => {
      dispatch({ type: "LOGIN_FAIL", payload: err });
    }
  );
}
