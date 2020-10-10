import React from 'react';
import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { connect } from 'react-redux';
import PageLoading from '../PageLoading';
import PageError from '../PageError';
import CartItem from './CartItem'
import '../style/listas.css';
import { addProduct } from '../../redux'

class CartContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null
        }
    }

    render() {

        if (this.state.error) {
            return (
                <PageError></PageError>
            );
        }

        if (!this.props.cantidad) {
            return (
                <div class="container">
                    <div class="card-body">
                        <div class="table-responsive">
                            <div class="page-header">
                                <h3>No posee articulos en su carrito</h3>
                            </div>
                        </div>
                        <Link to="/home" className="btn btn-info btn-sm text-white"><span>Continuar comprando</span></Link>
                    </div>
                </div>
            );
        }

        return (
            <Provider store={store}>
                <section className="sptb">
                    <div class="row row-cards">
                        <div class="col-lg-8">
                            <div class="card m-b-20">
                                <div class="card-header ">
                                    <div class="card-title">Carrito de compras</div>

                                </div>
                                <div class="card-body">
                                    <div class="table-responsive border-top">
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Producto</th>
                                                    <th>Precio</th>
                                                    <th>Cantidad</th>
                                                    <th>Total</th>
                                                    <th>Accion</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.props.products.map((item, index) => (
                                                    <CartItem
                                                        key={index}
                                                        price={item.price}
                                                        title={item.title}
                                                        cant={item.cant}
                                                        id={item.id}
                                                    >
                                                    </CartItem>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card ">
                                <div class="card-header ">
                                    <div class="card-title">Resumen del pedido</div>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td>Subtotal</td>
                                                    <td class="text-right">${this.props.total}</td>
                                                </tr>
                                                <tr>
                                                    <td><span>Total</span></td>
                                                    <td class="text-right text-muted"><span>${this.props.total}</span></td>
                                                </tr>
                                                <tr>
                                                    <td><span>Total de la Orden</span></td>
                                                    <td><h2 class="price text-right mb-0">${this.props.total}</h2></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                        <Link to="/confirm" className="btn btn-primary mt-2"><span>Finalizar compra</span></Link>
                                        <Link to="/home" className="btn btn-success mt-2"><span>Continuar comprando</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Provider>
        );
    }
}

// export default CartContainer;

const mapStateToProps = state => {
    return {
        products: state.products,
        total: state.total,
        cantidad: state.cantidad
    }
}

const matchDispatchToProps = dispatch => {
    return {
        addProduct: () => dispatch(addProduct())
    }
}

export default connect(
    mapStateToProps,
    matchDispatchToProps
)(CartContainer)