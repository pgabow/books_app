import { 
    FETCH_INITIAL_DATA_REQUEST, 
    FETCH_INITIAL_DATA_SUCCESS, 
    FETCH_INITIAL_DATA_ERROR,
    CHANGE_CATEGORY,
    COUNT_BOOK,
    LOAD__BOOKS_MORE,
    CHANGE_SORT,
} from "constants/constants"

const initialState = {
    books: [],
    isLoading: false,
    category: 'all',
    sort: 'relevance',
    isError: false,
    error: null,
    count_books: 0,
}

const booksReducer = (state = initialState, action) => {
    const {type, payload} = action

    switch(type) {
        case FETCH_INITIAL_DATA_REQUEST :
            return {
                ...state,
                isLoading: true,
                isError: false, 
                error: null,
            }
            
        case FETCH_INITIAL_DATA_SUCCESS :
            return {
                ...state, 
                books:[...payload],
                isLoading: false
            }    
            
        case LOAD__BOOKS_MORE :
            return {
                ...state, 
                books:[...state.books, ...payload],
                isLoading: false
            }        
            
        case FETCH_INITIAL_DATA_ERROR :
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: payload
            } 
        
        case CHANGE_CATEGORY :
            return {
                ...state,
                category: payload
            }

        case COUNT_BOOK :
            return {
                ...state,
                count_books: payload.count_books,
            }       
        
        case CHANGE_SORT :
            return {
                ...state,
                sort: payload
            }
        
        default: 
            return state
    }
}

export default booksReducer