import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;
    let newMessageText = props.newMessageText;

    let dialogsElements = state.dialogs
        .map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />)

    let messagesElements = state.messages
        .map(message => <Message key={message.id} message={message.message} />)

    const addMessage = () => {
        props.dispatch(addMessageCreator());
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageTextCreator(text));
    };

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                { dialogsElements }
            </div>
            <div className={style.messages}>
                { messagesElements }
                <div className={style.textarea}>
                    <textarea
                        value={newMessageText}
                        onChange={onMessageChange}
                        placeholder='Enter your message' />
                    <button onClick={addMessage}>Отправить</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;