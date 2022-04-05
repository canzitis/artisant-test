import React from 'react';
// @ts-ignore
import preloaderImg from '../../img/preloader.gif'
import s from  './preloader.module.scss'

const Preloader = () => {
    return (
        <div className={s.container}>
            <img src={preloaderImg} alt="Загрузка..."/>
        </div>
    );
};

export default Preloader;
