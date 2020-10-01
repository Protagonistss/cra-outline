import React from "react";
import Routes from "./routes/index";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Routes></Routes>
    </Provider>
  );
}
export default App;
