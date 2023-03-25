import React, { useState } from 'react'

import './style.scss'
import 'assets/fonts/fonts.css'

const ScrollUp = () => {
  const [isStatus, setStatus] = useState(false)

  const scrollFunc = () => {
    let windowY = window.pageYOffset
    let allY = document.documentElement.clientHeight

    windowY > allY ? setStatus(true) : setStatus(false)
  }

  const toUp = () => {
    let windowY = window.pageYOffset

    if (windowY > 0) {
      window.scrollBy(0, -10000)
      // setTimeout(toUp, 0);
    }
  }

  window.addEventListener('scroll', scrollFunc)

  return (
    <button
      onClick={() => toUp()}
      className={isStatus ? 'scroll__to-top show__scroll-top' : 'scroll__to-top'}
    >
      <span className='icon-chevron-up chevron-up'></span>
    </button>
  )
}

export default ScrollUp
