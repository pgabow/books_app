import React from "react";

import {Form} from 'react-bootstrap'
import './styles.scss'

const SearchInput = (props) => {
    return(
        <div className="books__input">
            <Form.Control
                size="lg"
                onKeyPress={props.onKeyPress} 
                className="search__input"
                onChange={props.handleChange}
                value={props.value}
                placeholder='Введите название'
            />
        </div>
    )
}

export default SearchInput