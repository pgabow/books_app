import React, { useEffect, useState } from 'react'

import routeMain from './routes'

import SearchInput from 'components/SearchInput'
import BooksList from 'components/BooksList'
import Loader from 'components/Loader'
import SelectCategory from 'components/SelectCategory'
import SelectSort from 'components/SelectSort'

import { COUNT_BOOK } from 'constants/constants'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInitialData } from 'store/books/actions'
import { selectState } from 'store/books/selectors'

import Button from 'react-bootstrap/Button'
import './styles.scss'

const MainPage = () => {
  const [value, setValue] = useState('')
  const [postValue, setPostValue] = useState('')
  const { books, isLoading, category, count_books, sort } = useSelector(selectState)
  const dispatch = useDispatch()

  useEffect(() => {
    if (postValue) {
      dispatch(fetchInitialData(postValue, category, count_books, sort))
    }
    setValue('')
  }, [postValue, category, sort, dispatch, count_books])

  const onKeyPress = (e) => {
    let key = e.key
    if (key === 'Enter') {
      setPostValue(value)
    }
  }

  const loadMore = () => {
    if (books.length % 30 === 0) {
      dispatch({
        type: COUNT_BOOK,
        payload: {
          count_books: count_books + 30,
        },
      })
      dispatch(fetchInitialData(postValue, category, count_books + 30, sort, true))
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    setValue(e.currentTarget.value)
  }

  return (
    <section className='mainPage'>
      <div className='container'>
        <div className='books__content'>
          <div className='books__search'>
            <SelectCategory />
            <SelectSort />
            <SearchInput
              onKeyPress={(e) => onKeyPress(e)}
              handleChange={(e) => handleChange(e)}
              value={value}
            />
          </div>
          {!isLoading ? <BooksList list={books} /> : <Loader />}
          <Button variant='primary' className='book__upCount button' onClick={loadMore}>
            MORE
          </Button>
        </div>
      </div>
    </section>
  )
}

export { routeMain }

export default MainPage
