import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ListaItem from './ListaItem';

class Buscador extends React.Component {
    constructor(props) {
        super(props);
        const busca = this.props.location.state.palabra.toLowerCase();
        const filtrar = this.props.location.state.articulos.filter(function (art) {
            return art.title.toLowerCase().includes(busca)
        });
        this.state = {
            palabra: busca,
            data: filtrar,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        this.setState({
            palabra: e.target.value,
        })
    };

    handleSubmit = async e => {
        e.preventDefault();
        const busca = this.state.palabra.toLowerCase();
        this.setState({ palabra: busca })
        if (this.state.palabra !== "") {
            const filtrar = this.props.location.state.articulos.filter(function (art) {
                return art.title.toLowerCase().includes(busca)
            });
            this.setState({ data: filtrar })
        }

    }

    render() {

        return (
            <Fragment>
                <section className="sptb bg-white border-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-7 col-md-12">
                                <div className="sub-newsletter">
                                    <h3 className="mb-2"><i className="fa fa-search mr-2"></i> Busqueda : {this.state.palabra}</h3>
                                    <Link to="/home">Volver al inicio</Link>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-5 col-md-12">
                                <form onSubmit={this.handleSubmit} >
                                    <div className="input-group sub-input mt-1">
                                        <input type="text" className="form-control input-lg" id="text" placeholder="Buscar articulo" name="buscar" value={this.state.palabra} onChange={this.handleChange} />
                                        <div className="input-group-append ">
                                            <button className="btn btn-primary btn-lg br-tr-7 br-br-7">
                                                Buscar
                                        </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="sptb">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="card mb-0">
                                    <div className="card-body">
                                        <div className="section-title center-block text-center"><h2>Resultado de la busqueda</h2></div>
                                        <div className="item2-gl ">
                                            <div className="tab-content">
                                                {this.state.data
                                                    ?
                                                    <div className="tab-pane active" id="tab-12">
                                                        <div className="row">

                                                            {this.state.data.map((item, index) => (
                                                                <ListaItem
                                                                    key={item.id}
                                                                    price={item.price}
                                                                    image={item.image}
                                                                    category={item.category}
                                                                    description={item.description}
                                                                    title={item.title}
                                                                    id={item.id}
                                                                >
                                                                </ListaItem>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    : <h2>No hay resultados</h2>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default Buscador;