import { Module } from "i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Localization from "expo-localization";
import { languageCacheKey } from "./constants";

export const languageDetector: Module & any = {
  type: "languageDetector",
  async: true,
  detect: async (callback) => {
    const storedLanguage = await AsyncStorage.getItem(languageCacheKey);

    if (storedLanguage) return callback(storedLanguage);

    const phoneLanguage = Localization.locale.replace("_", "-");

    return callback(phoneLanguage);
  },
  init: () => {},
  cacheUserLanguage: (language) => {
    AsyncStorage.setItem(languageCacheKey, language);
  },
};
