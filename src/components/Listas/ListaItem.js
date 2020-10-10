import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { addProduct } from '../../redux'
import { ToastContainer, toast } from 'react-toastify';

function ListaItem(props) {
    const [cantidad, setNumber] = useState(1)
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(addProduct([{id: props.id, title: props.title, price: props.price, cant: cantidad}]))
		toast.success("Se ha agregado el producto al carrito")
    }
    
    return (
        <div className="col-lg-6 col-md-12 col-xl-4" >
            <div className="card card_lista overflow-hidden" >
                <div className="item-card2-img"  >
                    <div className="arrow-ribbon bg-primary">{props.price}</div>
                    <img src={props.image} alt="img" className="cover-image" />
                </div>
                <div className="item-card7-overlaytext">
                    <a className="text-white badge badge-primary">
                    </a>
                </div>
                <div className="card-body">
                    <div className="item-card2">
                        <div className="item-card2-desc">
                            <Link className="btn btn-white btn-block" to={{
                                pathname: `/detalle/${props.id}`,
                            }}>{props.title}</Link>
                            <Link to={{
                                pathname: `/categoria/${props.category}`,
                            }}><h6><span class="badge badge-secondary">{props.category}</span></h6></Link>
                            <p className="mb-0">{props.description.substring(0, 50)}</p>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Cantidad" aria-label="Cantidad" aria-describedby="button-addon2"
                        value={cantidad} onChange={e => setNumber(parseInt(e.target.value))}></input>
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2" 
                            onClick={handleClick}>Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default ListaItem
