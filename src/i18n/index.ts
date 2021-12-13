import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./constants";
import { languageDetector } from "./languageDetector";

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en-US",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    keySeparator: ".",
    compatibilityJSON: "v3",
    resources,
  });

export default i18n;
