import React, {useState} from "react";
import styles from "./Language.module.css"
import {Button, ButtonGroup} from "@mui/material";
import {Dropdown} from "../../../../shared/Dropdown/Dropdown";
import {useTranslation} from "react-i18next";



export const Language = () => {

    const [language, setLanguage] = useState<string>(localStorage.getItem('i18nextLng')?.toUpperCase() || 'EN')
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const {i18n} = useTranslation();

    const handleMouseEnter = () => {
        setIsOpen(true)
    }

    const handleMouseLeave = () => {
        setIsOpen(false)
    }

    const toggleLanguage = (lng: string) => {
        setLanguage(lng)
        setIsOpen(false)
        localStorage.setItem('language', lng)
        i18n.changeLanguage(lng.toLowerCase());
    }



    return(
        <div className={styles.wrapper} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <input className={styles.input} value={language} type={'text'} readOnly />
            {isOpen && <Dropdown className={styles.dropdown}>
                <li onClick={() => toggleLanguage('EN')}>EN</li>
                <li onClick={() => toggleLanguage('FR')}>FR</li>
            </Dropdown>}
        </div>
        )
}