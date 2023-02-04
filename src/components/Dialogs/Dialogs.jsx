import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messegeElements = props.messeges.map((element) => (
    <Message message={element.messege} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className="dialogs__items">
        <ul className="list-reset dialogs__list">{dialogsElements}</ul>
      </div>
      <div className="dialogs__messages">{messegeElements}</div>
    </div>
  );
};

export default Dialogs;
