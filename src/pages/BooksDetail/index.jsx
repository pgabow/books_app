import React, {useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import preparePrice from "components/utils/preparePrice";

import routeMain from "./routes";

import './styles.scss'
import PlugBook from "components/PlugBook";
import { selectID } from "store/detail/selectors";
import { loadBookDetail } from "store/detail/actions";

const BooksDetail = () => {
    const {id} = useParams()
    const {bookDetail} = useSelector(selectID)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadBookDetail(id))
    }, [id, dispatch])

    return (
        <section className="book">
            <div className="container">
                <div className="book__content">
                    <div className="book__left">
                        {bookDetail.volumeInfo?.imageLinks?.thumbnail ?
                            <div className="book__image">
                                <img src={bookDetail.volumeInfo.imageLinks.thumbnail} alt="Обложа"/>
                            </div> 
                            : <PlugBook
                                title={ bookDetail.volumeInfo?.title}
                                authors={ bookDetail.volumeInfo?.authors}           
                            />
                        }
                    </div>
                    <div className="book__right">
                        {bookDetail ? (
                            <div className="book__info">
                                <h2 className="book__title">{bookDetail?.volumeInfo?.title || ''}</h2>
                                <p className="book__author">{bookDetail?.volumeInfo?.authors || ''}</p>
                                <p className="book__page">Количество страниц: {bookDetail?.volumeInfo?.pageCount || ''}</p>
                                <p className="book__sale">{preparePrice(bookDetail?.saleInfo?.retailPrice?.amount || '', bookDetail?.saleInfo?.saleability || '')}</p>
                            </div>
                        ) : <></>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export {routeMain}

export default BooksDetail