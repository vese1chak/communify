import React from 'react';
import style from './NavBar.module.css';
import {NavLink} from 'react-router-dom';

const NavBar = (props) => {
    let friendsElements = props.state.dialogs
        .map(friend => <div key={friend.id}>
                <div className={style.image}>
                    <img src={friend.img} alt='avatar'></img>
                </div>
                <div className={style.friendName}>
                    <span>{friend.name}</span>
                </div>
            </div>
        )
    
    return (
    <nav className={style.nav}>
        <div className={style.navItem}><NavLink to='/profile' className={link => link.isActive ? style.active : style.item}>Profile</NavLink></div>
        <div className={style.navItem}><NavLink to='/dialogs' className={link => link.isActive ? style.active : style.item}>Messages</NavLink></div>
        <div className={style.navItem}><NavLink to='/news' className={link => link.isActive ? style.active : style.item}>News</NavLink></div>
        <div className={style.navItem}><NavLink to='/music' className={link => link.isActive ? style.active : style.item}>Music</NavLink></div>
        <div className={style.navItem}><NavLink to='/settings' className={link => link.isActive ? style.active : style.item}>Settings</NavLink></div>
        <hr />
        <div className={style.navItem}><span className={style.item}>Friends:</span></div>
        <div className={style.friends}>
            { friendsElements }
        </div>
    </nav>
    );
};

export default NavBar;