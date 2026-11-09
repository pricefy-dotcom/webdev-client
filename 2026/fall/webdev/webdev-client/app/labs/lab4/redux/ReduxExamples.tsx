"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";

export default function ReduxExamples() {
  return (
    <Provider store={store}>
      <div id="wd-redux-examples">
        <h2>Redux</h2>
        <HelloRedux />
        <CounterRedux />
        <hr />
      </div>
    </Provider>
  );
}
