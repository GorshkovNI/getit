import React from "react";
import {Button} from "../../shared/Button/Button";
import {useTranslation} from "react-i18next";
import i18next from "i18next";
import {Language} from "../../entities/Header/components/Language/Language";
// import fr from '../../i18n/fr/translation.json'
// import en from '../../i18n/en/translation.json'

export const MainPage = () => {

    // const {t, i18n}: {t: Function, i18n: any} = useTranslation();
    // const changeLanguage = (language: string) => {
    //     i18n.changeLanguage(language)
    // }11

    const {t} = useTranslation();
    // const toggleLanguage = (language: string) => {
    //     i18n.changeLanguage(language);
    // };

    return (
        <>
            {t('title')}
            <Button mode='primary'>123</Button>
        </>
    )
}