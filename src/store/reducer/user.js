const initialUserStatus = {
  isLogin: false,
  loading: false,
  userInfo: {
    userName: null,
    nickName: null,
  },
};

function userReducer(state = { ...initialUserStatus }, action) {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        isLogin: true,
        loading: false,
        userInfo: action.payload,
      };
    case "LOGIN_FAIL":
      return {
        ...state,
        ...initialUserStatus,
        ...action.payload,
      };
    default:
      return state;
  }
}

export { userReducer };
