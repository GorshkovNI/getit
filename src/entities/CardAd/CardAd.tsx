import React from "react";
import styles from './CardAd.module.css'
import {Slider} from "./components/Slider/Slider";
import {p} from './example'
import { Favorites } from "../../shared/Icons";


export const CardAd = () => {
    return(
        <div className={styles.wrapper}>
            <Slider photos={p} />
            <div className={styles.description}>
                <div className={styles.titleBlock}>
                    <span className={styles.title}>Peugeot 308 2008</span>
                    <Favorites className={styles.favorites} />
                </div>
                <span className={styles.price}>190 000 000 MRU</span>
                <span className={styles.located}>Algiers Algeria</span>
            </div>
        </div>
    )
}