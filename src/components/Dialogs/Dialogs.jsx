import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let newMessageElement = React.createRef();

  let addMessage = (props) => {
    let text = newMessageElement.current.value;
    console.log(text);
    props.addMessage(text);
  };

  let onMessageChange = (props) => {
    console.log("add");
  };

  return (
    <div className={classes.dialogs}>
      <div className="dialogs__items">
        <ul className="list-reset dialogs__list">
          {props.dialogsData.map((dialog) => (
            <DialogItem name={dialog.name} id={dialog.id} />
          ))}
        </ul>
      </div>
      <div className="dialogs__messages">
        {props.messages.map((element) => (
          <Message message={element.message} />
        ))}
      </div>
      <textarea
        ref={newMessageElement}
        onChange={onMessageChange}
        name=""
      ></textarea>
      <button onClick={addMessage} className="btn">
        Добавить
      </button>
    </div>
  );
};

export default Dialogs;
