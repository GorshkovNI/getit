import React from "react";
import styles from './ProfileArea.module.css'
import {Avatar} from "@mui/material";

export const ProfileArea = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.profileInfo}>
                <Avatar sx={{width: 30, height: 30, bgcolor: '#d4e34a'}}>H</Avatar>
                <span>Name</span>
            </div>
        </div>
    )
}