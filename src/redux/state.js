import { rerenderAll } from "../render";

let state = {
  sidebar: {
    profiles: [
      { id: 1, profile: "Andrew" },
      { id: 2, profile: "Kate" },
      { id: 3, profile: "Katrine" },
    ],
  },
  profilePage: {
    posts: [
      { id: 1, likesCount: 15, message: "Hi, how are you?" },
      { id: 2, likesCount: 25, message: "my next post" },
      { id: 3, likesCount: 23, message: "blablabla" },
      { id: 4, likesCount: 11, message: "kakashka" },
    ],
    newPostsText: "it-inkubator",
  },
  dialogsPage: {
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How old are you?" },
      { id: 3, message: "Im good" },
      { id: 4, message: "and you?" },
      { id: 5, message: "yes good" },
    ],
    dialogsData: [
      { id: 1, name: "Oleg" },
      { id: 2, name: "Лена" },
      { id: 3, name: "Жека" },
      { id: 4, name: "Леха" },
      { id: 5, name: "Василина" },
    ],
  },
};

window.state = state;
console.log(state);

export let addPost = () => {
  let newPost = {
    id: 5,
    likesCount: 0,
    messege: state.profilePage.newPostsText,
  };
  state.profilePage.posts.push(newPost);
  rerenderAll(state);
  state.profilePage.newPostsText = "";
};

export let addMessage = () => {
  let newMessage = {
    id: 5,
    message: "yes good",
  };
  state.dialogsPage.messages.push(newMessage);
  console.log(newMessage);
  rerenderAll(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostsText = newText;
  rerenderAll(state);
};

export default state;
