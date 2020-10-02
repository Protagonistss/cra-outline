/**
 * 数据类
 */

const inital = [
  { key: "home", title: "home", link: "/", icon: "shouye" },
  { key: "cart", title: "cart", link: "/cart", icon: "fenlei" },
  { key: "olist", title: "orders", link: "/olist", icon: "icon-" },
  { key: "user", title: "profile", link: "/user", icon: "wode" },
];

class MenuModel {
  constructor(data) {
    this._data = data ? data : inital;
  }
  get getData() {
    return this._data;
  }
  set setData(item) {
    console.error("_data of inner can not be modifid");
  }
}

export { MenuModel };
