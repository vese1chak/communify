import React from 'react';
import Post from '../Post/Post';
import style from './MyPosts.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    let postsElements = props.posts
        .map(post => <Post key={post.id} message={post.message} likes={post.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };

    return (
    <div className={style.postsBlock}>
        <h2>Новый пост</h2>
        <div className={style.newPost}>
            <textarea ref={newPostElement} 
                value={props.newPostText}
                onChange={onPostChange} />
            <button onClick={addPost}>Добавить</button>
        </div>
        <h2>My posts</h2>
        <div className={style.posts}>
            { postsElements }
        </div>
    </div>
    );
};

export default MyPosts;