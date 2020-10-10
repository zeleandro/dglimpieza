import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux'
import store from './../redux/store';
import { addProduct } from './../redux'
import CartContainer from '../components/Cart/CartContainer'
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

function Cart(props) {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    //cargar el carrito en data desde redux
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

    if (loading === true && !products) {
        return (
            <PageLoading></PageLoading>
        );
    }

    if (error) {
        return (
            <PageError></PageError>
        );
    }

    if (products == []) {
        return (
            <h2>No hay articulos cargados</h2>
        );
    }

    return (
        <Provider store={store}>
            <CartContainer />
        </Provider>
    )

}

export default Cart