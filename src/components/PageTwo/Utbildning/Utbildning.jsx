import { IconCalendarTime } from '@tabler/icons-react';
import React, { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../../../context/LanguageContext';

export const Utbildning = () => {

  const { language } = useContext(LanguageContext);

  const getContentByLanguage = (lang) => {
    return lang === "se"
      ? { eduh2: "Utbildning",
          eduh3: "Lärarprogrammet",
          edusmall: "Okt 2004 — Feb 2011",
          lararInfo: "Kandidatexamen, 140-hp",
          eduh3no2: "Lärarprogrammet",
          gymnInfo: "Gymnasieutbildning",

        }
      : { eduh2: "Education",
          eduh3: "Teacher education",
          edusmall: "Oct 2004 — Feb 2011",
          lararInfo: "Bachelor's degree",
          eduh3no2: "High School Education",
          gymnInfo: "Focus on Natural Sciences",
        };
  };

  const [content, setContent] = useState(getContentByLanguage(language));

  useEffect(() => {
    setContent(getContentByLanguage(language));
  }, [language]);

  return (
    <div className="hover-highlight">
      <h2>{content.eduh2}</h2>
        <div className="divider div-transparent-2"></div>
        <h3>{content.eduh3}</h3>

          <h4>Stockholms Universitet</h4>
          <div className="icon-wrapper">
            <IconCalendarTime/>
            <small>{content.edusmall}</small>
        </div>

      <div className="project-info">{content.lararInfo}</div>
      <h3>{content.eduh3no2}</h3>

        <h4>Danderyds Gymnasium</h4>
        <div className="icon-wrapper">
          <IconCalendarTime/>
          <small>Aug 2000 — Jul 2003 </small>
        </div>

      <div className="project-info">{content.gymnInfo}</div>
    </div>
  )
}
