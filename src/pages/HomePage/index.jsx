import React from "react"

import { NavLink } from 'react-router-dom'
import routeMain from "./routes"
import { routeMain as routeMainPage } from 'pages/BooksPage'

import './styles.scss'

const HomePage = () => {
    return (
      <section className='home'>
        <div className='container'>
          <div className='home__content'>
            <h1 className='home__title'>Тестовое задание на должность Junior frontend developer</h1>
            <NavLink className='home__descr' to={routeMainPage()}>
              Пройдите в галерею
            </NavLink>
            {/* <p className='home__descr header__link'>Пройдите в галерею</p> */}
          </div>
        </div>
      </section>
    )
}

export {routeMain}

export default HomePage