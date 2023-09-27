import React from 'react';
import style from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={style.message}>
            <div><img src='https://via.placeholder.com/50' alt='avatar' /></div>
            <div className={style.text}>{props.message}</div>
        </div>
    );
};

export default Message;