import getBooks from "services/getBooks";
import {
    BOOKS_ERROR, 
    FETCH_INITIAL_DATA_ERROR, 
    FETCH_INITIAL_DATA_REQUEST, 
    FETCH_INITIAL_DATA_SUCCESS,
    LOAD__BOOKS_MORE

} from "constants/constants";

export const fetchInitialDataRequest = () => (
    { type:  FETCH_INITIAL_DATA_REQUEST}
);

export const fetchInitialDataSuccess = (books) => {
    return {
        type: FETCH_INITIAL_DATA_SUCCESS,
        payload: books
    }
}

export const fetchInitialDataError = error => ({
    type: FETCH_INITIAL_DATA_ERROR,
    payload: error
})

export const fetchInitialData = (value, category, count_book, sort, isLoadMore) => async(dispatch) => {
    console.log(sort)
    try {
        dispatch(fetchInitialDataRequest())
        const response = await getBooks(value, category, sort, count_book);
        if(isLoadMore) {
            dispatch({
                type: LOAD__BOOKS_MORE,
                payload: response.data.items
            })
        } else {
            dispatch(fetchInitialDataSuccess(response.data.items))
        }
    } catch (e) {
        dispatch({
            type: BOOKS_ERROR,
            payload: console.log(e)
        })
    }
}