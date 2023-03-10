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
                  messages={props.state.dialogsPage.messages}
                  dialogsData={props.state.dialogsPage.dialogsData}
                  dispatch={props.dispatch}
                  newMessagesText={props.state.dialogsPage.newMessagesText}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  posts={props.state.profilePage.posts}
                  dispatch={props.dispatch}
                  newPostsText={props.state.profilePage.newPostsText}
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
