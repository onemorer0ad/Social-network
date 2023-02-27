import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/state";

const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // props.updateNewPostText(text);
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={classes.postsBlock}>
      <h2>My posts</h2>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostsText}
        ></textarea>
        <div>
          <button onClick={addPost}>add post</button>
        </div>
      </div>
      <div>
        {props.posts.map((post) => (
          <Post message={post.message} likesCount={post.likesCount} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
