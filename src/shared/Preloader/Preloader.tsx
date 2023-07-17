import React from "react";
import styles from './Preloader.module.css'
import PreloaderSvg  from './preloader.svg';

export const Preloader = () => {

    return(
        <>
            <PreloaderSvg className={styles.preloader} />
        </>
    )
}