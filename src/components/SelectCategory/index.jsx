import React from "react";

import Form from 'react-bootstrap/Form';

import { CHANGE_CATEGORY } from "constants/constants";
import { useDispatch } from "react-redux";

import './styles.scss'

const SelectCategory = () => {
    const dispatch = useDispatch() 

    const getParams = (e) => {
        dispatch({type: CHANGE_CATEGORY, payload: e.target.value})
    }

    return (
        <label className="categories__lable">
            Выберите категорию поиска
            <Form.Select 
                size="lg" 
                className="books__categories select" 
                onChange={getParams} 
                defaultValue='all'
            >
                <option className="categories__author" value='all'>All</option>
                <option className="categories__title" value='art'>Art</option>
                <option className="categories__inpublisher" value='biography'>Biography</option>
                <option className="categories__author" value='computers'>Computers</option>
                <option className="categories__title" value='history'>History</option>
                <option className="categories__inpublisher" value='medical'>Medical</option>
                <option className="categories__inpublisher" value='poetry'>Poetry</option>
            </Form.Select>
        </label>
    )
}

export default SelectCategory