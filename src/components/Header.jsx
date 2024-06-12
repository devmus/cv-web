import React, { useContext, useEffect } from 'react'
import { LanguageContext } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  
  const {language, setLanguage} = useContext(LanguageContext);

  const navigate = useNavigate()

  const toggleLanguage = () => {
    if(language === "se") {
      setLanguage("en")
      navigate("/cv-web?lang=en")
    } else {
      setLanguage("se")
      navigate("/cv-web?lang=se")
    }
  }

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const currentPathLang = params.get('lang');
    console.log(currentPathLang);
    if (currentPathLang !== language && (currentPathLang === "en" || currentPathLang === "se")) {
      setLanguage(currentPathLang);
    }
  }, [location, setLanguage, language]);
   

  return (
    <header>
      <div className="header-wrapper">
        <div>
          Curriculum vitae - Rasmus Wersäll
        </div>
        <div className="switch">
          <input 
          id="language-toggle" 
          className="check-toggle check-toggle-round-flat" 
          type="checkbox" 
          checked={(language === "en")}
          onChange={toggleLanguage}
          />
          <label htmlFor="language-toggle"></label>
          <span className="on">SE</span>
          <span className="off">EN</span>
        </div>
      </div>
    </header>
  )
}