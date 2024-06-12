import { IconAccessible, IconBrandHtml5, IconBrandJavascript, IconBrandNodejs, IconBrandReact, IconBrandSass, IconBrandTypescript, IconCalendarTime, IconPalette, IconSeo, IconSquare, IconSquareCheck, IconTestPipe, IconWritingSign } from '@tabler/icons-react'
import { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../../../context/LanguageContext';

export const Ongoing = () => {

  const { language } = useContext(LanguageContext);

  const getContentByLanguage = (lang) => {
    return lang === "se"
      ? { eduh2: "Pågående utbildning",
          eduh3: "Blockchainutvecklare @ Medieinstitutet i Stockholm",
          eduh4: "Kurser",
          course1: "Kompetensportfölj och entreprenörskap",
          course2: "Blockkedjeteknik, affärsprocesser och juridik",
          course3: "HTML och CSS",
          course4: "Agil Projektledning - metodik och verktyg",
          course5: "Blockkedjeprogrammering: javascript och blockkedja",
          course6: "Blockkedja frontend: React och blockkedja",
          course7: "Blockkedja för backend: NodeJS och blockkedja",
          course8: "Smart Contacts: Skapa smarta kontrakt",
          skillsh4: "Kompetenser",
        }
      : { eduh2: "Ongoing education",
          eduh3: "Blockchain Developer @ Medieinstitutet in Stockholm",
          eduh4: "Courses",
          course1: "Skills Portfolio and Entrepreneurship",
          course2: "Blockchain Technology, Business Processes, and Law",
          course3: "HTML and CSS",
          course4: "Agile Project Management - Methodology and Tools",
          course5: "Blockchain Programming: JavaScript and Blockchain",
          course6: "Blockchain Frontend: React and Blockchain",
          course7: "Blockchain for Backend: NodeJS and Blockchain",
          course8: "Smart Contracts: Creating smart contracts",
          skillsh4: "Programming skills",
        };
  };

  const [content, setContent] = useState(getContentByLanguage(language));

  useEffect(() => {
    setContent(getContentByLanguage(language));
  }, [language]);


  return (
    <div className="profil-wrapper mi-kurs hover-highlight">
      <h2>{content.eduh2}</h2>
      <div className="company">
        <h3>{content.eduh3}</h3>
        <div className="icon-wrapper">
          <IconCalendarTime/>
          <small>Aug 2023 - Jul 2025</small>
        </div>
      </div>
      <article className="mi-info">
        <div className="kunskap-wrapper">
          <div className="kurser">
          <h4>{content.eduh4}</h4>
          <div className="divider div-transparent div-arrow-down"></div>
          <ul>
            <li><IconSquareCheck/><span>{content.course1}</span></li>
            <li><IconSquareCheck/><span>{content.course2}</span></li>
            <li><IconSquareCheck/><span>{content.course3}</span></li>
            <li><IconSquareCheck /><span>{content.course4}</span></li>
            <li><IconSquareCheck/><span>{content.course5}</span></li>
            <li><IconSquareCheck/><span>{content.course6}</span></li>
            <li><IconSquare /><span>{content.course7}</span></li>
            <li><IconSquare /><span>{content.course8}</span></li>
          </ul>
        </div>
        <div className="kunskap">
        <h4>{content.skillsh4}</h4>
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
