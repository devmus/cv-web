import React, { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../../../context/LanguageContext';

export const Erfarenhet = () => {

  const { language } = useContext(LanguageContext);

  const getContentByLanguage = (lang) => {
    return lang === "se"
      ? { exph2: "Andra erfarenheter",
          exph3: "Röstmottagare",
          exph4: "Riksdagsvalet, Europavalet",
          exph3no2: "Provledare",
          exph4no2: "Högskoleprov",
        }
      : { exph2: "Other experiences",
          exph3: "Vote receiver",
          exph4: "Parliamentary elections, European Elections",
          exph3no2: "Exam supervisor",
          exph4no2: "University Admissions Test",
        };
  };

  const [content, setContent] = useState(getContentByLanguage(language));

  useEffect(() => {
    setContent(getContentByLanguage(language));
  }, [language]);

  return (
    <div className="hover-highlight">
      <h2>{content.exph2}</h2>
      <div className="divider div-transparent-2"></div>
        <h3>{content.exph3}</h3>
        <div className="company">
          <h4>{content.exph4}</h4>
        </div>
      <div className="project-info"></div>
      <h3>{content.exph3no2}</h3>
      <div className="company">
        <h4>{content.exph4no2}</h4>
        <div className="icon-wrapper">
        </div>
      </div>
      <div className="project-info"></div>
    </div>
  )
}
