import React from 'react'
import "./bild.css"
import profilbild from "./rasmus2.jpg"

export const Bild = () => {
  return (
    <div className="image">
      <img src={profilbild} alt="Rasmus Wersäll profilbild" />
    </div>
  )
}
