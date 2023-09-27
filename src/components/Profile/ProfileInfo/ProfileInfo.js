import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
    <section className={style.content}>
        <div>
            <img src='https://kelohouse.ru/images/dom119/31.jpg' alt='background' />
        </div>
        <div className={style.descriptionBlock}>
            ava
        </div>
    </section>
    );
};

export default ProfileInfo;