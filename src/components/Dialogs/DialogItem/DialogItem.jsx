import React from "react";
import classes from "./DialogsItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <li className={classes.dialog}>
      <div className={classes.dialogImg}>
        <img
          width="50px"
          src="https://bipbap.ru/wp-content/uploads/2021/11/krasivye-devushki-na-stim-avu-podborka-004.jpg"
          alt=""
        />
      </div>
      <div className={classes.dialogLink}>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
    </li>
  );
};

export default DialogItem;
