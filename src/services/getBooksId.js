import axios from 'axios'

const API_KEY = process.env.REACT_APP_BOOKS_API_KEY
const BASE_URL = process.env.REACT_APP_BASE_URL

const getBooksId = (id) => {
  const options = {
    method: 'GET',
    url: `${BASE_URL}/${id}?key=AIzaSyCf2v96XjV6dJ5jvuSsWdEkA-g-2THdjUc`,
    key: API_KEY,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }
  return axios.request(options)
}

export default getBooksId
