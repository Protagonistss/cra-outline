import allRoutes from "./routes";

const getAllRoutes = () => {
  let _ = [];
  allRoutes.forEach((item) => {
    _.push(...item.routes);
  });
  return _;
};

const matchAllRoute = (currentLocation) => {
  const allRoutes = getAllRoutes();
  console.log(currentLocation);
  const currentRoute = allRoutes.find((item) => {
    if (item.path === currentLocation.pathname) {
      return item;
    } else {
      return null;
    }
  });
  return currentRoute;
};

const matchRoute = (routes, currentLocation) => {
  const match = routes.find((item) => {
    if (item.path === currentLocation.pathname) {
      return item;
    } else {
      return null;
    }
  });
  return match;
};

export { matchAllRoute, matchRoute };
