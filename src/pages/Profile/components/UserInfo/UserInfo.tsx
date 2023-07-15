import React, {FC} from "react";
import styles from './UserInfo.module.css'
import {Avatar, Button, Rating} from "@mui/material";

interface IUserInfo{
    name?: string
    rating?: number
    countReviews?: number
}

export const UserInfo:FC<IUserInfo> = ({name = 'User', rating = 2.3, countReviews = 0}) => {
    return(
        <>
            <Avatar className={styles.avatar} sx={{width: 100, height: 100}}>H</Avatar>
            <span className={styles.name}>{name}</span>
            <div className={styles.reviews}>
                <Rating name="user-rating" value={rating} precision={0.5} readOnly />
                <div className={styles.showReviews}>{countReviews} reviews</div>
            </div>
            <Button className={styles.buttonAdd} variant={'text'}>add reviews</Button>
        </>
    )
}