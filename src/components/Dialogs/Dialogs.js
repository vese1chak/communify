import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs
        .map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />)

    let messagesElements = props.state.messages
        .map(message => <Message key={message.id} message={message.message} />)

    let newMessageElement = React.createRef();

    const addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'});
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = {type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text};
        props.dispatch(action);
    };

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                { dialogsElements }
            </div>
            <div className={style.messages}>
                { messagesElements }
                <div className={style.textarea}>
                    <textarea ref={newMessageElement}
                        value={props.newMessageText}
                        onChange={onMessageChange} />
                    <button onClick={addMessage}>Отправить</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;