import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { addPost, updateNewPostText, addMessage } from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
export let rerenderAll = (state) => {
  root.render(
    <React.StrictMode>
      <App
        addPost={addPost}
        state={state}
        updateNewPostText={updateNewPostText}
        addMessage={addMessage}
      />
    </React.StrictMode>
  );
};
