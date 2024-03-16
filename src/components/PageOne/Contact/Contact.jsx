import { IconBrandLinkedin, IconCake, IconHome, IconMail, IconPhone } from '@tabler/icons-react'
import React from 'react'
import "./contact.scss"

export const Contact = () => {
  return (
  <div className="contact-wrapper">
    <div className="contact-info">
      <a target="_blank" href="mailto:rasmus.wersall@gmail.com"><IconMail/><span>rasmus.wersall@gmail.com</span></a>
    </div>
    <div className="contact-info">
          <IconPhone/><span>+46(0)707543271</span>
    </div>
    <div className="contact-info">
          <IconCake/><span>1984-05-17 0112</span>
    </div>
    <div className="contact-info">
          <IconHome/><span>Rörviksbacken 5, 120 55, Stockholm</span>
    </div>
    <div className="contact-info">
          <a target="_blank" href="https://www.linkedin.com/in/rasmus-wersall/"><IconBrandLinkedin/><span>Rasmus Wersäll</span></a>
    </div>
  </div>
  )
}
