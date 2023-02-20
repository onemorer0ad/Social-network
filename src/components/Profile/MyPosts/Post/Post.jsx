import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={classes.item}>
        <img
          src="https://www.malls.ru/upload/iblock/d7c/https_hypebeast.com_wp_content_blogs.dir_6_files_2023_01_avatar_4_and_5_movies_confirmed_james_cameron_1.jpg"
          alt=""
        />
        <div>{props.message}</div>
      </div>
      <div className={classes.likes}>
        <span className={classes.item__span}>likes {props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
