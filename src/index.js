import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
// import { render } from '@testing-library/react';
import { Provider } from 'react-redux'
import store from "./redux/store/store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
      <App />
  </Provider>
);
