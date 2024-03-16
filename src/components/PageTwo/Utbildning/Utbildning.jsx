import { IconCalendarTime } from '@tabler/icons-react';
import React from 'react'

export const Utbildning = () => {

  const lararInfo = "Kandidatexamen, 140-hp";
  const gymnInfo = "Inriktning naturvetenskap";

  return (
    <div>
      <h2>Utbildning</h2>
        <div class="divider div-transparent-2"></div>
        <h3>LÄRARPROGRAMMET</h3>

          <h4>Stockholms Universitet</h4>
          <div className="icon-wrapper">
            <IconCalendarTime/>
            <small>  . okt 2004 — feb 2011</small>
        </div>

      <div className="project-info">{lararInfo}</div>
      <h3>GYMNASIEUTBILDNING</h3>

        <h4>Danderyds Gymnasium</h4>
        <div className="icon-wrapper">
          <IconCalendarTime/>
          <small>aug 2000 — jul 2003 </small>
        </div>

      <div className="project-info">{gymnInfo}</div>
    </div>
  )
}
