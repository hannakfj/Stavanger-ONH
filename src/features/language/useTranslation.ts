import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import translations from "./translations.json";

type TranslationKey = keyof (typeof translations)["no"];
export function useTranslation() {
  const lang = useSelector((state: RootState) => state.language.language);

  function t<T = string>(key: TranslationKey): T {
    return translations[lang][key] as T;
  }

  return { t, lang };
}
