import React from 'react'
import { IconCalendarTime } from '@tabler/icons-react'

export const Arbete = () => {

  const eslInfo = "Produktion av livestreamad underhållning. I arbetet med dessa projekt har jag lärt mig arbeta i stora team där man behöver koordinera sig och genomföra sina uppgifter med knappa sekunders marginal. Arbetspassen kan vara 12 timmar långa och när det är sändning behövs 100% fokus."
  const almaInfo = "Undervisning i matematik, naturvetenskap och teknik i årskurs 7 - 9. Som lärare är arbetsbördan stor och för att inte gå under så var det viktigt för mig att bli duktig på att prioritera och vara effektiv. Genom mitt ledarskap i klassrummet har jag lärt mig hantera och styra stora grupper av elever med flera olika viljor, behov och kunskapsnivåer."
  const malarInfo = "Undervisning i matematik, naturvetenskap och svenska på kommunal skola i Stockholm. Handledare för ett flertal lärarstudenter. Bidragit till skolans IKT-utveckling och mottagit pris för "
  const malarInfo2 = "inom Stockholm Stad."

  return (
    <div>
      <h2>Arbetslivserfarenhet</h2>
      <div className="divider div-transparent-2"></div>
        <h3>E-sport TV-production</h3>
        <div className="company">
          <h4>ESL FACEIT GROUP</h4>
          <div className="icon-wrapper">
            <IconCalendarTime/>
            <small>Konsultuppdrag, okt 2022 — feb 2024</small>
        </div>
      </div>
      <div className="project-info">{eslInfo}</div>
      <h3>LÄRARE HÖGSTADIET</h3>
      <div className="company">
        <h4>Almaskolan AB</h4>
        <div className="icon-wrapper">
          <IconCalendarTime/>
          <small>Heltid, aug 2022 — jul 2023</small>
        </div>
      </div>
      <div className="project-info">{almaInfo}</div>
      <h3>LÄRARE MELLANSTADIET</h3>
      <div className="company">
        <h4>Mälarhöjdens skola</h4>
        <div className="icon-wrapper">
          <IconCalendarTime/>
          <small>Heltid, nov 2011 — aug 2022</small>
        </div>
      </div>
      <div className="project-info">{malarInfo}<a className="malar-link" target="_blank" href="https://www.mynewsdesk.com/se/stockholms_stad/pressreleases/aarets-laerare-och-laerarlag-2015-i-stockholms-stad-korade-1154698">Årets Lärarlag 2015 </a>{malarInfo2}</div>
    </div>
  )
}
