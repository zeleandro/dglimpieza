import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './../redux/store';

class About extends Component {
    render() {
        return (
            <Provider store={store}>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <h1>Sobre DG Limpieza</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <p>Aca va toda la informacion de la empresa {this.props.empresa} propiedad de {this.props.nombre}</p>
                            <ul>
                                <li>
                                    Una Caracteristica
                            </li>
                                <li>
                                    Otra Caracteristica
                            </li>
                                <li>
                                    Una Caracteristica mas
                            </li>
                                <li>
                                    Y lo que quieras decir de la empresa
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Provider>
        )
    }
}

export default About