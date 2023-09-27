import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.post}>
            {props.message}
            <a href='0'>{props.likes} likes</a>
        </div>
    );
};

export default Post;