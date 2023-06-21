import React, {FC, ReactNode} from "react";
import styles from './Button.module.css'
import cn from 'classnames'


interface IButton {
    className?: string,
    children: ReactNode,
    onClick?: () => void,
    disabled?: boolean,
    mode: "primary" | "secondary" | "transparent";
    size?: "small" | "medium" | "big"
}

export const Button:FC<IButton> = ({className, children, onClick, mode, disabled, size}) => {

    const buttonClassName = cn(styles.button,
        {
        [styles.primary]: mode === 'primary',
        [styles.secondary]: mode === 'secondary',
        [styles.transparent]: mode === 'transparent',

        [styles.small]: size === 'small',
        [styles.medium]: size === 'medium',
        [styles.big]: size === 'big',
    }, className
    )

    return (
        <button className={buttonClassName}>
            {children}
        </button>
    )
}