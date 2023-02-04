import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";

const MyPosts = (props) => {
  let PostElements = props.posts.map((post) => (
    <Post messege={post.messege} likesCount={post.likesCount} />
  ));

  return (
    <div className={classes.postsBlock}>
      <h2>My posts</h2>
      <div>
        <textarea></textarea>
        <div>
          <button>add post</button>
        </div>
      </div>
      <div>{PostElements}</div>
    </div>
  );
};

export default MyPosts;
