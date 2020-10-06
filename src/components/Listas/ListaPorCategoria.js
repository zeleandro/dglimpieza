import React, { useEffect, useState } from 'react';
import PageLoading from '../../components/PageLoading';
import PageError from '../../components/PageError';
import ListaArticulo from './ListaArticulo';
import { Link } from 'react-router-dom';


export default function ListaCategoria(props) {
    const [state, setState] = useState({ loading: false, error: false });
    const [articulox, setArticulos] = useState(null);

    const fetchData = async () => {
        const cat = props.match.params.categoria;

        await fetch('https://fakestoreapi.com/products/category/'+cat)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error ');
                }
            })
            .then(data => {
                setState({
                    loading: false,
                });
                setArticulos(data);
                console.log(data);

            })
            .catch((error) => {
                setState({
                    loading: false,
                    error: true
                });
                console.log(error)
            });

        ;
    };

    useEffect(() => {
        setState({ loading: true, error: null });
        fetchData();

    }, []);

    if (state.error) {
        return <PageError></PageError>
    }


    return (
        <React.Fragment>
            {state.loading
                ? <PageLoading></PageLoading>
                : articulox != null && articulox.length > 0
                    ? <ListaArticulo articulos={articulox} > </ListaArticulo>
                    : <section className="sptb">
                        <div class="container text-center">
                            <h1 class="h2  mb-3">No hay articulos para la categoría {props.match.params.categoria}</h1>
                            <Link class="btn btn-primary" to="/home">Ir al inicio</Link>
                        </div>
                    </section>
            }
        </React.Fragment>
    );
}