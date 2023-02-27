const ADD_POST = "ADD-POST";

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const ADD_MESSAGE = "ADD-MESSAGE";

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let store = {
  _state: {
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
      newPostsText: "Камасутра",
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
      newMessagesText: "Сообщение номер 1",
    },
  },
  _callSubscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    //type : 'ADD-POST'
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        likesCount: 0,
        message: this._state.profilePage.newPostsText,
      };
      this._state.profilePage.posts.push(newPost);
      this._callSubscriber(this._state);
      this._state.profilePage.newPostsText = "";
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostsText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 5,
        message: this._state.dialogsPage.newMessagesText,
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._callSubscriber(this._state);
      this._state.dialogsPage.newMessagesText = "";
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessagesText = action.newDialog;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newDialog: text,
});

window.store = store;

export default store;
