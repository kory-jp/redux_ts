import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";

// (0 , _store.createState) is not a function
// import { createState } from "./redux/store";
// fugafugaの中でexportする時、export defaultで公開してある。
// この場合、中括弧なしでimportできる。またimport時に任意の名前に変更可能である。
// しかしexport default が使用できるのは1ファイルにつき1個まで
import createState from "./redux/store";

const store = createState();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
