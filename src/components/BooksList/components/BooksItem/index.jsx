import React from 'react'

import { NavLink } from 'react-router-dom'

import PlugBook from 'components/PlugBook'

import { routeMain as routeBookDetail } from 'pages/BooksDetail'

import './styles.scss'
import prepareData from 'components/utils/prepareData'

const BooksItem = React.memo(function BooksItem ({ item }) {
  const image = item.volumeInfo.imageLinks?.thumbnail

  return (
    <li className='books__item'>
      <article className='book__article'>
        <div className='book__card'>
          <div className='book__content'>
            <NavLink className='book__image' to={routeBookDetail(item.id?.toString())}>
              {image ? (
                <img src={image} alt='Обложа' />
              ) : (
                <PlugBook title={item.volumeInfo.title} authors={item.volumeInfo.authors} />
              )}
            </NavLink>
            <div className='book__description'>
              <p className='book__author'>{prepareData(item.volumeInfo?.authors)}</p>
              <NavLink className='books__detail' to={routeBookDetail(item.id?.toString())}>
                Подробнее
              </NavLink>
            </div>
          </div>
        </div>
      </article>
    </li>
  )
})

export default BooksItem
