const loginApi = {
  login(userInfo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userInfo.name === "admin") {
          resolve({ id: 0, name: "superAdmin" });
        } else {
          reject({ errorCode: 401, message: "非法用户" });
        }
      }, 1000);
    });
  },
  getProfile(userInfo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userInfo.id === 0) {
          resolve({ money: "100" });
        } else {
          reject({ message: "contact me" });
        }
      }, 1000);
    });
  },
};

export { loginApi };
