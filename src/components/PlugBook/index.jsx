import React from "react";

import './styles.scss'

const PlugBook = (props) => {
    return (
        <div className="book__plug">
            <p className="book__author">{props.title}</p>
            <h2 className="book__title">{props.authors}</h2>
        </div>
    )
}

export default PlugBook