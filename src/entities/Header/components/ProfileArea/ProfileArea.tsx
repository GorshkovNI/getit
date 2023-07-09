import React, {useState} from "react";
import styles from './ProfileArea.module.css'
import {Avatar } from "@mui/material";
import {Dropdown} from "@shared/Dropdown/Dropdown";
//import Arrow from '../../../../shared/Icons/Icon/arrow.svg'
import {Arrow} from "../../../../shared/Icons";
import {useSelector} from "react-redux";
import {getIsAuth, getIsLoading} from "@store/user/userSelector";


export const ProfileArea = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const isLoading = useSelector(getIsLoading)
    const isAuth = useSelector(getIsAuth)

    const handleMouseEnter = () => {
        setIsOpen(true)
    }

    const handleMouseLeave = () => {
        setIsOpen(false)
    }

    if(!isAuth){
        return(<div>Войти/Зарегистрироваться</div>)
    }

    return(
            <div className={styles.wrapper} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className={styles.profileInfo}>

                    <Avatar className={styles.avatar} sx={{width: 30, height: 30}}>H</Avatar>
                    <span>Name</span>
                    <Arrow className={styles.arrow} />

                    {isOpen && <div className={styles.dropdownArea}>
                        <Dropdown className={styles.dropdown}>
                            <li>Mes annonses</li>
                            <li>Sortir</li>
                        </Dropdown>
                    </div>
                    }

                </div>
            </div>

    )
}