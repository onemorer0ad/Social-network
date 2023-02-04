import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

let posts = [
  { id: 1, likesCount: 15, messege: "Hi, how are you?" },
  { id: 2, likesCount: 25, messege: "my next post" },
  { id: 3, likesCount: 23, messege: "blablabla" },
  { id: 4, likesCount: 11, messege: "kakashka" },
];

let dialogsData = [
  { id: 1, name: "Oleg" },
  { id: 2, name: "Лена" },
  { id: 3, name: "Жека" },
  { id: 5, name: "Леха" },
  { id: 6, name: "Василина" },
];

let messeges = [
  { id: 1, messege: "Hi" },
  { id: 2, messege: "How old are you?" },
  { id: 3, messege: "Im good" },
  { id: 5, messege: "and you?" },
  { id: 6, messege: "yes good" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogsData={dialogsData} messeges={messeges} />
  </React.StrictMode>
);
