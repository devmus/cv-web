import { useContext, useEffect, useState } from 'react'
import profilbild from "./rasmus2.jpg"
import { LanguageContext } from '../../../context/LanguageContext';

export const Bild = () => {

  const { language } = useContext(LanguageContext);

  const getContentByLanguage = (lang) => {
    return lang === "se"
      ? { alt: "Rasmus Wersäll profilbild" }
      : { alt: "Rasmus Wersäll profile picture" };
  };

  const [content, setContent] = useState(getContentByLanguage(language));

  useEffect(() => {
    setContent(getContentByLanguage(language));
  }, [language]);

  return (
    <div className="image">
      <img src={profilbild} alt={content.alt} />
    </div>
  )
}
