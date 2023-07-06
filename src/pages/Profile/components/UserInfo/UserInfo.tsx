import React from "react";
import styles from './UserInfo.module.css'
import { Avatar } from "@mui/material";

export const UserInfo = () => {
    return(
        <>
            <Avatar className={styles.avatar} sx={{width: 100, height: 100}}>H</Avatar>
            <div>show reviews</div>
            <div>add reviews</div>
        </>
    )
}