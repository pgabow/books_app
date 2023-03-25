import React from "react";

import { routeMain as routeHomePage } from "pages/HomePage";
import { routeMain as routeMainPage } from "pages/BooksPage";

import './styles.scss' 
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <h2 className="header__title">Книжная галерея</h2>
                    <nav className="header__nav nav">
                        <NavLink 
                            to={routeHomePage()}
                            className='header__link'
                        >
                            Главная
                        </NavLink>
                        <NavLink 
                            to={routeMainPage()}
                            className='header__link'
                        >
                            Галерея
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header