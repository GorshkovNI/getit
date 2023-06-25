import React, {FC, ReactNode} from "react";
import styles from './Dropdown.module.css'
import cn from 'classnames'

interface IDropdown{
    children: ReactNode,
    className?: string
}

export const Dropdown:FC<IDropdown> = ({children, className}) => {
    return(
        <div className={cn(styles.dropdown, className)}>
            <ul className={styles.ul}>
                {React.Children.map(children, (child, index) => {
                    return <li key={index}>{child}</li>
                })}
            </ul>
        </div>
    )
}