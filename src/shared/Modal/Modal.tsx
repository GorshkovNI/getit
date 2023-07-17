import React, { FC, ReactNode } from "react";
import styles from "./Modal.module.css";

interface IModal {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal: FC<IModal> = ({ isOpen, onClose, children }) => {
    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return isOpen ? (
        <div className={styles.modal}>
            <div className={styles.overlay} onClick={handleOverlayClick} />
            <div className={styles.content}>
                <div className={styles.closeButton} onClick={onClose}>
                    X
                </div>
                {children}
            </div>
        </div>
    ) : null;
};