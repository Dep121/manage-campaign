import { useCallback, useContext } from "react";
import { LanguageContext } from "../Components/TranslatorProvider";
import { translate } from "../Translations";


export function useTranslate() {
  let { changeLanguage, lang } = useContext(LanguageContext);
  let t = useCallback((key)=>translate(lang, key), [lang]);

  return {t, changeLanguage, lang };
}
