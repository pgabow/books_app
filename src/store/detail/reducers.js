import { 
    BOOK_ID
} from "constants/constants"

const initialState = {
    bookDetail: {}
}

const idReducer = (state = initialState, action) => {
    const {type, payload} = action

    switch(type) {       
        case BOOK_ID :
            return {
                ...state,
                bookDetail: {...payload}
            }

        default: 
            return state
    }
}

export default idReducer
