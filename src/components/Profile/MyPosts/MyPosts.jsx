import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";

const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
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
