import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
    <section className={style.content}>
        <ProfileInfo />
        <MyPosts posts={props.state.posts} 
            newPostText={props.state.newPostText}
            dispatch={props.dispatch} />
    </section>
    );
};

export default Profile;