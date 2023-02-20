import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  addPost,
  updateNewPostText,
  addMessage,
  updateNewMessagesText,
} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
export let rerenderAll = (state) => {
  root.render(
    <React.StrictMode>
      <App
        addPost={addPost}
        state={state}
        updateNewPostText={updateNewPostText}
        updateNewMessagesText={updateNewMessagesText}
        addMessage={addMessage}
      />
    </React.StrictMode>
  );
};
