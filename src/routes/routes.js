import BaseLayout from "../layout/base-layout";
import HomePage from "../pages/home-page";
import CartPage from "../pages/cart-page";
import OlistPage from "../pages/olist-page";
import UserPage from "../pages/user-page";
import Authorization from "./authorization";
import LoginPage from "../pages/login-page";
import _404 from "../pages/404";
import BlankLayout from "../layout/blank-layout";

const baseRoutes = [
  {
    path: "/",
    title: "home",
    _1istNav: true,
    showTopBar: false,
    showBottomBar: true,
    props: { exact: true },
    component: HomePage,
  },
  {
    path: "/cart",
    icon: "fenlei",
    _1stNav: true,
    showTopBar: true,
    showBottomBar: true,
    title: "cart",
    component: CartPage,
  },
  {
    path: "/olist",
    showTopBar: true,
    icon: "icon-",
    _1istNav: true,
    showBottomBar: true,
    title: "olist",
    component: OlistPage,
  },
  {
    path: "/user",
    title: "center",
    icon: "wode",
    _1stNav: true,
    showTopBar: true,
    showBottomBar: true,
    component: UserPage,
    guard: Authorization,
  },
];

const blankRoutes = [
  {
    path: "/login",
    title: "login",
    icon: "wode",
    component: LoginPage,
  },
  {
    path: "",
    showTopBar: true,
    showBottomBar: true,
    title: "404",
    component: _404,
  },
];

export { baseRoutes, blankRoutes };

export default [
  {
    layout: BaseLayout,
    routes: baseRoutes,
  },
  {
    layout: BlankLayout,
    routes: blankRoutes,
  },
];
