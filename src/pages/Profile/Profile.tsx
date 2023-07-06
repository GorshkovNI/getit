import React from "react";
import { ProductCard } from "./components/ProductCard/ProductCard";
import { UserInfo } from "./components/UserInfo/UserInfo";
import styles from './Profile.module.css'

export const Profile = () => {
    return(
        <div className={styles.container}>
                <div className={styles.userInfo}>
                    <UserInfo />
                </div>
                <div className={styles.adsUser}>
                    <ProductCard />
                </div>
        </div>
    )
}