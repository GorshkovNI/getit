import React, {FC} from "react";
import styles from './Header.module.css'
import {Link} from "react-router-dom";
import {Button} from "@shared/Button/Button";
import cn from 'classnames'
import {ProfileArea} from "./components/ProfileArea/ProfileArea";
import {Favorites} from "../../shared/Icons";
import {Language} from "./components/Language/Language";


export const Header = () => {

    return(
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.leftSide}>
                    <Link to={'/'} style={{textDecoration: 'none'}}>
                        <Button className={styles.button} mode={'transparent'}>Principal</Button>
                    </Link>
                    <Link to={'/about'} style={{textDecoration: 'none'}}>
                        <Button className={styles.button} mode={'transparent'}>À propos de nous</Button>
                    </Link>
                </div>
                <div className={styles.center}>
                    <Link to={'/addItem'} style={{textDecoration: 'none'}}>
                        <Button className={cn(styles.button, styles.addItem)} mode={'primary'} size={'medium'}>Déposer une annonce</Button>
                    </Link>
                </div>
                <div className={styles.rightSide}>
                    <Favorites className={styles.favorites} />
                    <ProfileArea />
                    <Language />
                </div>
            </nav>
        </header>
    )
}