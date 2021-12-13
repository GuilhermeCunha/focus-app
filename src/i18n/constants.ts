import { Resource } from "i18next";

export const languageCacheKey = "@i18n-language";

export const resources: Resource = {
  ["pt-BR"]: {
    name: "Português",
    translation: require("./translations/pt-br.json"),
  },
  ["en"]: {
    name: "English",
    translation: require("./translations/en.json"),
  },
  ["en-US"]: {
    name: "English (US)",
    translation: require("./translations/en.json"),
  },
};

export const availableLanguages = Object.entries(resources).map(
  ([language, { name }]) => ({
    name: name,
    value: language,
  })
);
