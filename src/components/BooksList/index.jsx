import React from "react";
import BooksItem from "./components/BooksItem";

import './styles.scss'

const BooksList = ({list}) => {
    return (
        <ul className="books__items">
            {list.length > 0 ? list.map((book) => {
                return <BooksItem
                    key={book.id}
                    item={book}                
                />
            }) : <></>}
        </ul>
    )
}

export default BooksList