import React, {useEffect, useState} from "react";
import styles from './ProfileArea.module.css'
import {Avatar } from "@mui/material";
import {Dropdown} from "@shared/Dropdown/Dropdown";
import {Arrow} from "../../../../shared/Icons";
import {useDispatch, useSelector} from "react-redux";
import {getIsAuth, getIsLoading, getUserId, getUserName} from "@store/user/userSelector";
import {Authorization} from "@entities/Header/Autorization/Authorization";
import {useTranslation} from "react-i18next";
import {logout} from "@store/user/userSlice";
import {AppDispatch} from "@src/@types/dispatch";
import {Link} from "react-router-dom";


export const ProfileArea = () => {

    const {t} = useTranslation()

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

    const dispatch:AppDispatch = useDispatch()

    const isLoading = useSelector(getIsLoading)
    const isAuth = useSelector(getIsAuth)
    const name = useSelector(getUserName)
    const id = useSelector(getUserId)

    const handleMouseEnter = () => {
        setIsOpen(true)
    }

    const handleMouseLeave = () => {
        setIsOpen(false)
    }

    const handleLogout = () => {
        dispatch(logout())
    }

    useEffect(() => {
        if(isOpen) {
            setIsOpen(false)
            setIsOpenModal(false)
        }
    }, [isAuth])

    return(
            <div className={styles.wrapper} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {isLoading === 'pending' ? <span className={styles.loading}>Loading...</span> :
                    !isAuth ?
                        <>
                            <Authorization setIsOpenModal={setIsOpenModal} isOpenModal={isOpenModal} />
                            <span className={styles.authorization} onClick={() => setIsOpenModal(true)}>{t('registration')}</span>
                        </>
                        :
                        <div className={styles.profileInfo}>
                        <Avatar className={styles.avatar} sx={{width: 30, height: 30}}>{name ? name[0] : 'U'}</Avatar>
                        <Link className={styles.link} to={`profile/${id}`}>
                            <span className={styles.name}>{name ? name : 'User'}</span>
                        </Link>
                        <Arrow className={styles.arrow} />

                    {isOpen && <div className={styles.dropdownArea}>
                            <Dropdown className={styles.dropdown}>
                                <Link className={styles.link} to={`profile/${id}`}>
                                    <li>Mes annonses</li>
                                 </Link>
                                <li onClick={handleLogout}>Sortir</li>
                            </Dropdown>
                        </div>}
                </div>}
            </div>

    )
}