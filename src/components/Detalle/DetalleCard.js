import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '../../redux'
import { ToastContainer, toast } from 'react-toastify';


export default function DetalleCard(props) {
	const item = props.item;
	let price = parseFloat(props.price);
	const [cantidad, setCantidad] = useState(1)
	const products = useSelector(state => state.products)
	const dispatch = useDispatch()

	const onChange = (e) => {
		switch (e.target.name) {
			case 'cantidad': {
				setCantidad(e.target.value)
			}
			default: { }
		}
	}

	const handleClick = () => {
		dispatch(addProduct([{ id: item.id, title: item.title, price: item.price, cant: cantidad }]))
		toast.success("Se ha agregado el producto al carrito")
	}

return (
	<React.Fragment>
		<div className="card">
			<div className="single-productslide">
				<div className="row no-gutter">
					<div className="col-lg-6 border-right">
						<div className=" pb-0 image-zoom-container">
							<div className="show image-zoom" href="../assets/images/products/ecommerce/9.png" >
								<img src={item.image} id="show-img" />
							</div>
							<div className="small-img">
								<img src="../assets/plugins/Image-Zoom/images/online_icon_right@2x.png" className="icon-left" alt="" id="prev-img" />
								<div className="small-container">
									<div id="small-img-roll">
										<img src="../assets/images/products/ecommerce/10.png" className="show-small-img" alt="" />
									</div>
								</div>
								<img src="../assets/plugins/Image-Zoom/images/online_icon_right@2x.png" className="icon-right" alt="" id="next-img" />
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="product-gallery-data mb-0">
							<h3 className="mb-3 font-weight-semibold">{item.title}</h3>
							<div className="mb-3">
								<span className="font-weight-bold h1 text-danger">${item.price} </span>
							</div>
							<div className="mb-3">
								<span className="font-weight-bold h5 text-info">{item.category} </span>
							</div>
							<h6 className="font-weight-bold mt-4">Detalles</h6>
							<p className="text-dark">{item.description} </p>

							<h6 className="font-weight-bold mt-4">Agregar al carrito</h6>
							<div class="input-group mb-3">
								<div class="input-group-prepend">
									<span class="input-group-text" id="basic-addon1">Cantidad</span>
								</div>
								<input type="text" class="form-control" placeholder="Cantidad" aria-label="Username" aria-describedby="basic-addon1"
									name="cantidad" value={cantidad} onChange={onChange}></input>
							</div>
							<button className="btn btn-lg btn-success" name="comprar" onClick={handleClick}>Comprar</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<ToastContainer />
	</React.Fragment>
);
}
