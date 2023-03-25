import React from "react";

import { useDispatch } from "react-redux";
import { CHANGE_SORT } from "constants/constants";

import Form from 'react-bootstrap/Form';
import './styles.scss'

const SelectSort = () => {
    const dispatch = useDispatch()
    
    const getParams = (e) => {
        dispatch({type: CHANGE_SORT, payload: e.target.value})
    }

    return (
        <label className="filter__lable">
            Сортировать по:
            <Form.Select size="lg" defaultValue='relevance' className="filter__lable" onChange={getParams}>
                <option value='relevance' className="filter__param">Relevance</option>
                <option value='newest' className="filter__param">Newest</option>
            </Form.Select>
        </label>
    )
}

export default SelectSort