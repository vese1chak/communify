import React from 'react';
import style from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={style.dialog}>
            <div><img src='https://via.placeholder.com/50' alt='avatar' /></div>
            <div className={style.dialogLink}><NavLink to={path}>{props.name}чел</NavLink></div>
        </div>
    );
};

export default DialogItem;