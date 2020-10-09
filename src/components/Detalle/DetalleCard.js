import React, { Fragment } from 'react';


export default function DetalleCard(props) {
	const item = props.item;
	let price = parseFloat(props.price);

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
								<h6 className="font-weight-bold mt-4">Detalles</h6>
								<p className="text-dark">{item.description} </p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
