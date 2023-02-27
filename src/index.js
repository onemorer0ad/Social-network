import "./index.css";
import store from "./redux/state";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
export let rerenderAll = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
        // addMessage={store.addMessage.bind(store)}
        // updateNewPostText={store.updateNewPostText.bind(store)}
        // updateNewMessagesText={store.updateNewMessagesText.bind(store)}
      />
    </React.StrictMode>
  );
};
rerenderAll(store.getState());

store.subscribe(rerenderAll);
