import React from 'react'
import "./project.scss"
import { IconBook2, IconBrandGithub, IconLink } from '@tabler/icons-react'

export const Projekt = () => {

  const swishInfo = "Om Swish 2.0: En web3 app som ansluter till EVM-nätverk och kan få fram balans och historik för konto samt genomföra transaktioner. Utvecklad med JavaScript och TDD."
  const todoInfo = "Om Todo list: En interaktiv app för att skriva ner dagens sysslor och bocka av dem. Utvecklad i React.js med anslutning till externt API för att hämta slumpmässiga sysslor.";
  const wentoolsInfo = "Om Wen tools: En app för web3 användare att göra tidsberäkningar för att kunna navigare sig i den digitala och globala världen med communities med medlemmar från alla platser på jorden. Utvecklad med React.js.";

  return (
    <div className="project-wrapper">
      <h4>Portfolio</h4>
      <div className="divider div-transparent div-arrow-down"></div>
      <ul>
          <li>
            <h3>Swish 2.0</h3>
            <a target="_blank" href="https://devmus.github.io/swish2.0/">
              <div className="icon-wrapper">
                <IconLink/>
                <span>Link</span>
              </div>
            </a>
            <a target="_blank" href="https://github.com/devmus/swish2.0/blob/tdd/README.md">
              <div className="icon-wrapper">
                <IconBook2/>
                <span>ReadMe</span>
              </div>
            </a>
            <a target="_blank" href="https://github.com/devmus/swish2.0/tree/tdd">
              <div className="icon-wrapper">
                <IconBrandGithub/>
                <span>Github repo</span>
              </div>
            </a>
          </li>
          <div className="project-info">{swishInfo}</div>
          <li>
            <h3>Todo list</h3>
            <a target="_blank" href="https://devmus.github.io/todo-list/">
              <div className="icon-wrapper">
                <IconLink/>
                <span>Link</span>
              </div>
            </a>
            <a target="_blank" href="https://github.com/devmus/todo-list/blob/main/README.md">
              <div className="icon-wrapper">
                <IconBook2/>
                <span>ReadMe</span>
              </div>
            </a>
            <a target="_blank" href="https://github.com/devmus/todo-list">
              <div className="icon-wrapper">
                <IconBrandGithub/>
                <span>Github repo</span>
              </div>
            </a>
          </li>
          <div className="project-info">{todoInfo}</div>
          <li>
            <h3>Wen tools</h3>
            <a target="_blank" href="https://devmus.github.io/wen-tools/">
              <div className="icon-wrapper">
                <IconLink/>
                <span>Link</span>
              </div>
            </a>
            <a target="_blank" href="https://github.com/devmus/todo-list/blob/main/README.md">
              <div className="icon-wrapper">
                <IconBook2/>
                <span>ReadMe</span>
              </div>
            </a>
            <a target="_blank" href="https://github.com/devmus/todo-list">
              <div className="icon-wrapper">
                <IconBrandGithub/>
                <span>Github repo</span>
              </div>
            </a>
          </li>
          <div className="project-info">{wentoolsInfo}</div>
      </ul>
    </div>
  )
}

