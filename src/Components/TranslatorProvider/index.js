import React, { createContext, useState } from 'react';


export const LanguageContext = createContext({changeLanguage: ()=>{}, lang: ''});

export function TranslatorProvider({ defaultLang, children }) {
  const [lang, changeLanguage] = useState(defaultLang);
  return (
    <LanguageContext.Provider
      value = {{
        changeLanguage,
        lang
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}
