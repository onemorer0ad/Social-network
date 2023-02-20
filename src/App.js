import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Nav from "./components/Navbar/Nav";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav profiles={props.state.sidebar.profiles} />
        <div className="app-wrapper__content">
          <Routes>
            <Route
              path="/dialogs/*"
              element={
                <Dialogs
                  dialogsData={props.state.dialogsPage.dialogsData}
                  newMessagesText={props.state.dialogsPage.newMessagesText}
                  messages={props.state.dialogsPage.messages}
                  addMessage={props.addMessage}
                  updateNewMessagesText={props.updateNewMessagesText}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  posts={props.state.profilePage.posts}
                  newPostsText={props.state.profilePage.newPostsText}
                  addPost={props.addPost}
                  updateNewPostText={props.updateNewPostText}
                />
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
