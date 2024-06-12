import React, { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../../../context/LanguageContext';

export const Titel = () => {

  const { language } = useContext(LanguageContext);

  const getContentByLanguage = (lang) => {
    return lang === "se"
      ? { small: "Webbutvecklare med spetskompentens inom web3 och blockchain.",
        }
      : { small: "Web developer with specialized expertise in web3 and blockchain.",
        };
  };

  const [content, setContent] = useState(getContentByLanguage(language));

  useEffect(() => {
    setContent(getContentByLanguage(language));
  }, [language]);

  return (
    <>
    <small className="titel">{content.small}</small>
    <div className="divider div-transparent"></div>
    </>
  )
}
