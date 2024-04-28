import { IconCar, IconMessageCircle2 } from '@tabler/icons-react'
import React, { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../../../context/LanguageContext';

export const Ovrigt = () => {

  const { language } = useContext(LanguageContext);

  const getContentByLanguage = (lang) => {
    return lang === "se"
      ? { otherh2: "Övriga kompetenser",
          otherh3: "Språk",
          otherh4: "Svenska, Engelska",
          otherh3no2: "Körkort",
          otherh4no2: "B-körkort",
        }
      : { otherh2: "Other skills",
          otherh3: "Languages",
          otherh4: "Swedish, English",
          otherh3no2: "Miscellaneous",
          otherh4no2: "Driver licence",
        };
  };

  const [content, setContent] = useState(getContentByLanguage(language));

  useEffect(() => {
    setContent(getContentByLanguage(language));
  }, [language]);

  return (
    <div className="ovrigt-wrapper hover-highlight">
      <h2>{content.otherh2}</h2>
      <div className="divider div-transparent-2"></div>
      <div className="komp-wrapper">
        <div className="sprak-wrapper">
          <h3>{content.otherh3}</h3>
          <div className="icon-wrapper">
          <IconMessageCircle2/>
            <h4>{content.otherh4}</h4>
          </div>
        </div>
        <div className="korkort-wrapper">
          <h3>{content.otherh3no2}</h3>
          <div className="icon-wrapper">
          <IconCar/>
            <h4>{content.otherh4no2}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
