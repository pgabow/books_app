import React from "react";

import Header from "components/Header";

import HomePage, { routeMain as routeHomePage } from "pages/HomePage";
import MainPage, { routeMain as routeMainPage } from "pages/BooksPage";
import BooksDetail, { routeMain as routeBooksDetail } from "pages/BooksDetail";
import ScrollUp from 'components/ScrollUp'
import { Routes, Route, Navigate  } from "react-router-dom";

import './styles.scss'
import NotFoundPage from "pages/NotFoundPage";

const AppContent = () => {
    return (
      <div className='mainWrapper'>
        <Header />
        <main className='main'>
          <Routes>
            <Route path={routeHomePage()} element={<HomePage />} />
            <Route path={routeMainPage()} element={<MainPage />} />
            <Route path={routeBooksDetail()} element={<BooksDetail />} />
            <Route path='*' element={<NotFoundPage />} />
            {/* <Route
              path='*'
              element={
                <Navigate
                  to={{
                    pathname: routeHomePage(),
                  }}
                />
              }
            /> */}
          </Routes>
        </main>
        <ScrollUp />
      </div>
    )
}

export default AppContent