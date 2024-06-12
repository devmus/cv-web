import React, { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../../../context/LanguageContext';
import { IconCalendarTime } from '@tabler/icons-react'

export const Arbete = () => {

  const { language } = useContext(LanguageContext);

  const getContentByLanguage = (lang) => {
    return lang === "se"
      ? { workh2: "Arbetslivserfarenhet",
          workh3: "E-sport TV-produktion",
          small: "Konsultuppdrag, Okt 2022 — Feb 2024",
          eslInfo: "Produktion av livestreamad underhållning. I arbetet med dessa projekt har jag lärt mig arbeta i stora team där man behöver koordinera sig och genomföra sina uppgifter med knappa sekunders marginal. Arbetspassen kan vara 12 timmar långa och när det är sändning behövs 100% fokus.",
          workh3no2: "Lärare högstadiet",
          smallno2: "Heltid, Aug 2022 — Jul 2023",
          almaInfo: "Undervisning i matematik, naturvetenskap och teknik i årskurs 7 - 9. Som lärare är arbetsbördan stor och för att inte gå under så var det viktigt för mig att bli duktig på att prioritera och vara effektiv. Genom mitt ledarskap i klassrummet har jag lärt mig hantera och styra stora grupper av elever med flera olika viljor, behov och kunskapsnivåer.",
          workh3no3: "Lärare mellanstadiet",
          smallno3: "Heltid, Nov 2011 — Aug 2022",
          malarInfo: "Undervisning i matematik, naturvetenskap och svenska på kommunal skola i Stockholm. Handledare för ett flertal lärarstudenter. Bidragit till skolans IKT-utveckling och mottagit pris för ",
          malarInfoLink: "Årets Lärarlag 2015 ",
          malarInfo2: "inom Stockholm Stad."
        }
      : { workh2: "Work experience",
          workh3: "E-sport TV-production",
          small: "Consulting assignments, Oct 2022 — Feb 2024",
          eslInfo: "Production of livestreamed entertainment. In working on these projects, I have learned to collaborate in large teams where coordination is crucial, and tasks must be executed with only seconds to spare. Work shifts can be 12 hours long, and during broadcasts, 100% focus is required.",
          workh3no2: "Middle School Teacher",
          smallno2: "Full-time, Aug 2022 — Jul 2023",
          almaInfo: "Teaching in mathematics, natural sciences, and technology in grades 7-9. As a teacher, the workload is substantial, and to avoid becoming overwhelmed, it was important for me to become skilled at prioritizing and being efficient. Through my leadership in the classroom, I have learned to manage and guide large groups of students with various desires, needs, and levels of knowledge.",
          workh3no3: "Elementary School Teacher",
          smallno3: "Full-time, Nov 2011 — Aug 2022",
          malarInfo: "Teaching in mathematics, natural sciences, and Swedish at a municipal school in Stockholm. Supervisor for several teacher students. Contributed to the school's ICT develoment and received the award for the ",
          malarInfoLink: "best teacher team ",
          malarInfo2: "in 2015 within Stockholm"
        };
  };

  const [content, setContent] = useState(getContentByLanguage(language));

  useEffect(() => {
    setContent(getContentByLanguage(language));
  }, [language]);

  return (
    <div className="hover-highlight">
      <h2>{content.workh2}</h2>
      <div className="divider div-transparent-2"></div>
        <h3>{content.workh3}</h3>
        <div className="company">
          <h4>ESL FACEIT GROUP</h4>
          <div className="icon-wrapper">
            <IconCalendarTime/>
            <small>{content.small}</small>
        </div>
      </div>
      <div className="project-info">{content.eslInfo}</div>
      <h3>{content.workh3no2}</h3>
      <div className="company">
        <h4>Almaskolan AB</h4>
        <div className="icon-wrapper">
          <IconCalendarTime/>
          <small>{content.smallno2}</small>
        </div>
      </div>
      <div className="project-info">{content.almaInfo}</div>
      <h3>{content.workh3no3}</h3>
      <div className="company">
        <h4>Mälarhöjdens skola</h4>
        <div className="icon-wrapper">
          <IconCalendarTime/>
          <small>{content.smallno3}</small>
        </div>
      </div>
      <div className="project-info">{content.malarInfo}<a className="malar-link" target="_blank" href="https://www.mynewsdesk.com/se/stockholms_stad/pressreleases/aarets-laerare-och-laerarlag-2015-i-stockholms-stad-korade-1154698">{content.malarInfoLink}</a>{content.malarInfo2}</div>
    </div>
  )
}
