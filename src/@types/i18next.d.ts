// import the original type declarations
import "i18next";
// import all namespaces (for the default language, only)
import en from "../i18n/en/translation.json";
import fr from "../i18n/fr/translation.json";

declare module "i18next" {
    // Extend CustomTypeOptions
    interface CustomTypeOptions {
        // custom namespace type, if you changed it
        //defaultNS: "en";
        // custom resources type
        resources: {
            en: typeof en;
            fr: typeof fr;
        };
        // other
    }
}