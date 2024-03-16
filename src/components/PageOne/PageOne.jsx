import React from 'react'
import { Namn } from './Namn/Namn'
import { Titel } from './Titel/Titel'
import { Bild } from './Bild/Bild'
import { Profil } from './Profil/Profil'
import { Contact } from './Contact/Contact'
import { Ongoing } from './Ongoing/Ongoing'
import { Projekt } from './Projekt/Projekt'

export const PageOne = () => {

  const click = () => {
    
  }

  return (
    <>
    <div className="page-one-container">
      <div className="page-one">
        <div className="heading-container">
          <div className="name-title-container">
          <Namn />
          <Titel />
          <Contact />
          </div>
          <Bild />
        </div>
        <div className="divider div-transparent div-dot"></div>
        <div className="page-one-content">
          <Profil />
          <div className="divider div-transparent div-dot"></div>
          <Ongoing />
          <Projekt/>
        </div>
      </div>
    </div>
    </>
  )
}
