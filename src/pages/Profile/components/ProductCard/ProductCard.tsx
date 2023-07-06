import React from "react";
import styles from './ProductCard.module.css'
import car from './car.jpg'


export const ProductCard = () => {
    return(
        <div className={styles.container}>
            <img className={styles.image} src={car}/>
            <div className={styles.infoAds}>
                <h2 className={styles.title}>Название объявления</h2>
                <h3 className={styles.price}>111 000 000 MRU</h3>
                <span className={styles.city}>Nouakchott Mauritania</span>
            </div>
        </div>
    )
}