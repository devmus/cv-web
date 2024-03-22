import { IconAccessible, IconBrandHtml5, IconBrandJavascript, IconBrandNodejs, IconBrandReact, IconBrandSass, IconBrandTypescript, IconCalendarTime, IconPalette, IconSeo, IconSquare, IconSquareCheck, IconTestPipe, IconWritingSign } from '@tabler/icons-react'
import React from 'react'

export const Ongoing = () => {
  return (
    <div className="profil-wrapper mi-kurs">
      <h2>Pågående Utbildning</h2>
      <div className="company">
        <h3>Blockchainutvecklare @ Medieinstitutet i Stockholm</h3>
        <div className="icon-wrapper">
          <IconCalendarTime/>
          <small>aug 2023 - jul 2025</small>
        </div>
      </div>
      <article className="mi-info">
        <div className="kunskap-wrapper">
          <div className="kurser">
          <h4>Kurser</h4>
          <div className="divider div-transparent div-arrow-down"></div>
          <ul>
            <li><IconSquareCheck/><span>Kompetensportfölj och entreprenörskap</span></li>
            <li><IconSquareCheck/><span>HTML och CSS</span></li>
            <li><IconSquareCheck/><span>Blockkedjeteknik, affärsprocesser och juridik</span></li>
            <li><IconSquareCheck/><span>Blockkedjeprogrammering: javascript & blockkedja</span></li>
            <li><IconSquareCheck/><span>Blockkedja frontend: React och blockkedja</span></li>
            <li><IconSquare /><span>Blockkedja för backend: NodeJS och blockkedja</span></li>
            <li><IconSquare /><span>Agil Projektledning - metodik och verktyg</span></li>
            <li><IconSquare /><span>Smart Contacts: Skapa smarta kontrakt</span></li>
          </ul>
        </div>
        <div className="kunskap">
        <h4>Kompetenser</h4>
        <div className="divider div-transparent div-arrow-down"></div>
        <ul>
          <li><IconBrandHtml5 />HTML</li>
          <ul>
            <li><IconAccessible/> Accessability</li>
            <li><IconSeo/>SEO-optimization</li>
          </ul>
          <li><IconPalette/>CSS</li>
          <ul>
            <li><IconBrandSass/>SASS</li>
          </ul>
          <li><IconBrandJavascript/>Javascript</li>
          <ul>
            <li><IconBrandTypescript/>Typescript</li>
          </ul>
          <li><IconBrandReact/>React.js</li>
          <li><IconTestPipe/>TDD (Test driven development)</li>
          <li><IconBrandNodejs/>Node.js</li>
          <li><IconWritingSign/>Solidity</li>
        </ul>
        </div>
        </div>
      </article>
    </div>
  )
}
