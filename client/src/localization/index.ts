import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { Locales } from "../utils";

import en from "./languages/en";
import uk from "./languages/uk";

const resources = {
  en: {
    translation: en
  },
  uk: {
    translation: uk
  },
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: Locales.uk,
    interpolation: {
      escapeValue: false,
    },
  });
export default i18next;
