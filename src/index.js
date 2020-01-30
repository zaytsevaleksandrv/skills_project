import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";

import store from "./redux/store";

import Main from "./container/Main";

const renderApp = () =>
  render(
    <Provider store={store}>
      <Main />
    </Provider>,
    document.getElementById("root")
  );

renderApp();
store.subscribe(renderApp);
