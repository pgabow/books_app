import getBooksId from "services/getBooksId";
import {
    BOOK_ID,
    ID_ERROR
} from "constants/constants";

export const setBookId = (bookDetail) => {
    return {
        type: BOOK_ID,
        payload: bookDetail
    }
}

export const loadBookDetail = (id) => async(dispatch) => {
    try {
        const response = await getBooksId(id)
        dispatch(setBookId(response.data))
    } catch (e) {
        dispatch({
            type: ID_ERROR,
            payload: console.log(e)
        })
    }
}