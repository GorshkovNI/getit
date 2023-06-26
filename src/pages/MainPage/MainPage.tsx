import React from "react";
import styles from './MainPage.module.css'
import {useTranslation} from "react-i18next";
import {CardAd} from "../../entities/CardAd/CardAd";
import {Modal} from "../../shared/Modal/Modal";
import {Registration} from "../../entities/Header/Autorization/Registation/Registration";

export const MainPage = () => {


    const {t} = useTranslation();

    return (
        <main className={styles.wrapper}>
            <div className={styles.title}>
                <h3 className={styles.recomendation}>{t('recomendation')}</h3>
            </div>
            <div className={styles.productArea}>
                <div className={styles.products}>
                    {/*<CardAd />*/}
                    {/*<CardAd />*/}
                    {/*<CardAd />*/}
                    {/*<CardAd />*/}
                    {/*<CardAd />*/}
                    {/*<CardAd />*/}
                    {/*<CardAd />*/}
                    {/*<CardAd />*/}
                    <Registration />
                </div>
            </div>
        </main>
    )
}