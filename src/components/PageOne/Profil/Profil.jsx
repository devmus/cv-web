import React, { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../../../context/LanguageContext';

export const Profil = () => {

  const { language } = useContext(LanguageContext);

  const getContentByLanguage = (lang) => {
    return lang === "se"
      ? { profileh2: "Profil",
          profilearticle: "Utvecklare med fokus på web3 med kunskaper i programmering inom frontend, backend och smarta kontrakt. Mångårig arbetslivserfarenhet inom skola och utbildning. Effektiv, tålmodig och inlyssnande är egenskaper som beskriver mig väl. Jag är stresstålig och kan ha många bollar i luften samtidigt. Tycker om att lära mig nya saker och tar mig an nya utmaningar men dyker gärna ner i stora och detaljerade projekt också. ",
        }
      : { profileh2: "Profile",
          profilearticle: "Developer with a focus on web3, possessing programming skills in frontend, backend, and smart contracts. Extensive work experience in the field of education. Efficient, patient, and attentive are qualities that describe me well. I am stress-resistant and can handle multiple tasks simultaneously. I enjoy learning new things and take on new challenges, but I also immerse myself in large and detailed projects.",

        };
  };

  const [content, setContent] = useState(getContentByLanguage(language));

  useEffect(() => {
    setContent(getContentByLanguage(language));
  }, [language]);


  return (
    <div className="profil-wrapper hover-highlight">
      <h2 className="profil-heading">{content.profileh2}</h2>
      <article className="profil">{content.profilearticle}
      </article>
    </div>
  )
}
