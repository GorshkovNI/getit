import React from "react";
import {useTranslation} from "react-i18next";
import {CardAd} from "../../entities/CardAd/CardAd";

export const MainPage = () => {


    const {t} = useTranslation();

    return (
        <>
            {t('title')}
            <CardAd />
        </>
    )
}