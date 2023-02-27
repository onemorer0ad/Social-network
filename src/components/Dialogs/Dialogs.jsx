import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/state";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    let action = updateNewMessageTextActionCreator(text);
    props.dispatch(action);
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
        value={props.newMessagesText}
      ></textarea>
      <button onClick={addMessage} className="btn">
        Добавить
      </button>
    </div>
  );
};

export default Dialogs;
