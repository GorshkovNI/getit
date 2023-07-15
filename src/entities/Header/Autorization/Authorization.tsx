import React, {FC, useState} from "react";
import styles from "./Authorization.module.css";
import { Modal } from "../../../shared/Modal/Modal";
import { Auth } from "./Auth/Auth";
import { Registration } from "./Registation/Registration";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {getIsLoading} from "@store/user/userSelector";
import {clearError} from "@store/user/userSlice";

interface IAuthorization{
    isOpenModal: boolean,
    setIsOpenModal: (flag: boolean) => void
}

export const Authorization:FC<IAuthorization> = ({isOpenModal, setIsOpenModal }) => {

    const {t} = useTranslation();

    const isLoading = useSelector(getIsLoading)
    const dispatch = useDispatch()


    const closeModal = () => {
        setIsOpenModal(false);
    };

    const [activePage, setActivePage] = useState<"auth" | "registration">("auth");

    const handleToggleComponent = () => {
        setActivePage((prevComponent) =>
            prevComponent === "auth" ? "registration" : "auth"
        );
        dispatch(clearError())
    };

    return (
        <Modal isOpen={isOpenModal} onClose={closeModal}>
            {activePage === 'auth' ? <Auth closeModal={closeModal} /> : <Registration />}
            {isLoading !== 'pending' && <div className={styles.toggle} onClick={handleToggleComponent}>{activePage === 'auth' ? t('offerRegistration') : t("offerAuth")}</div>}
        </Modal>
    );
};