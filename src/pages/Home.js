import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import ListaArticulo from '../components/Listas/ListaArticulo';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import Banner from '../components/Banner';
import { Provider } from 'react-redux';
import store from './../redux/store';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            data: null,
            categorias: null,
            buscadorValue: "",
            filtrados: null,
            redirect: false,
            login: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.getArticulos();
    }

    getArticulos = async () => {
        this.setState({ loading: true, error: null });

        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            this.setState({
                loading: false,
                data: data
            })
        } catch (error) {
            console.log("error en la pagina : " + error);
            this.setState({ loading: false, error: error });
        }
    };

    handleChange = e => {
        this.setState({
            buscadorValue: e.target.value,
        }
        )
    };

    handleSubmit = async e => {
        e.preventDefault();
        if (this.state.buscadorValue !== "") {
            this.setState({ redirect: true });
        }

    }

    render() {

        if (this.state.loading === true && !this.state.data) {
            return (
                <PageLoading></PageLoading>
            );
        }

        if (this.state.error) {
            return (
                <PageError></PageError>
            );
        }

        if (this.state.data === null) {
            return (
                <h2>No hay articulos cargados</h2>
            );
        }

        if (this.state.redirect) {
            return (
                <Redirect
                    to={{
                        pathname: "/search",
                        state: {
                            articulos: this.state.data,
                            palabra: this.state.buscadorValue
                        }
                    }}
                />
            );
        }

        return (
            <Provider store={store}>
                <React.Fragment>
                    <Fragment>
                        <Banner
                            size={this.state.data.length}
                            buscadorValue={this.state.buscadorValue}
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                        >
                        </Banner>
                        <ListaArticulo articulos={this.state.data} titulo="Artículos">
                        </ListaArticulo>
                    </Fragment>
                </React.Fragment>
            </Provider>
        );
    }

}

export default Home;