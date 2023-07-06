import React, { useState } from "react";
import styles from "./Authorization.module.css";
import { Modal } from "../../../shared/Modal/Modal";
import { Auth } from "./Auth/Auth";
import { Registration } from "./Registation/Registration";
import {useTranslation} from "react-i18next";

export const Authorization = () => {

    const {t} = useTranslation();

    const [isOpenModal, setIsOpenModal] = useState<boolean>(true);
    
    const closeModal = () => {
        setIsOpenModal(false);
    };

    const [activePage, setActivePage] = useState<"auth" | "registration">("auth");

    const handleToggleComponent = () => {
        setActivePage((prevComponent) =>
            prevComponent === "auth" ? "registration" : "auth"
        );
    };

    return (
        <Modal isOpen={isOpenModal} onClose={closeModal}>
            {activePage === 'auth' ? <Auth /> : <Registration />}
            <div className={styles.toggle} onClick={handleToggleComponent}>{activePage === 'auth' ? t('offerRegistration') : t("offerAuth")}</div>
        </Modal>
    );
};