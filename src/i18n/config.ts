import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import i18n from "i18next";
import fr from './fr/translation.json'
import en from './en/translation.json'

export const resources = {
    fr: {
        fr
    },
    en: {
        en
    }
};

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    ns: ["translation"], // указываем только один namespace "translation"
    defaultNS: "translation", // указываем namespace по умолчанию
    resources,
    debug: true,
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;