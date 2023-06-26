import React, {FC, ReactNode} from "react";
import styles from './Modal.module.css'

interface IModal{
    children: ReactNode
}

export const Modal:FC<IModal> = ({children}) => {
    return(
        <div className={styles.modal}>
            <div className={styles.overlay}>
                <div className={styles.content}>
                    <div className={styles.closeButton}>X</div>
                    {children}
                </div>
            </div>
        </div>
    )
}