import React, {FC, ReactNode} from "react";
import styles from './Button.module.css'
import cn from 'classnames'


interface IButton {
    children: ReactNode,
    onClick?: () => void,
    disabled?: boolean,
    mode: "primary" | "secondary" | "transparent";
}

export const Button:FC<IButton> = ({children, onClick, mode, disabled}) => {

    const buttonClassName = cn(styles.button,
        {
        [styles.primary]: mode === 'primary',
        [styles.secondary]: mode === 'secondary',
        [styles.transparent]: mode === 'transparent',
    }
    )

    return (
        <button className={buttonClassName}>
            {children}
        </button>
    )
}