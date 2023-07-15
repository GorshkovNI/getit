import React, {useEffect} from "react";
import { ProductCard } from "./components/ProductCard/ProductCard";
import { UserInfo } from "./components/UserInfo/UserInfo";
import styles from './Profile.module.css'
import {CardAd} from "@entities/CardAd/CardAd";

export const Profile = () => {

    useEffect(() => {

    }, [])

    return(
        <div className={styles.container}>
                <div className={styles.userInfo}>
                    <UserInfo />
                </div>
                <div className={styles.adsUser}>
                    <span className={styles.title}>User Ads</span>
                    <div className={styles.cards}>
                        <CardAd />
                        <CardAd />
                        <CardAd />
                        <CardAd />
                        <CardAd />
                        <CardAd />
                    </div>
                </div>
        </div>
    )
}