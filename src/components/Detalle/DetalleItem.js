import React, { Fragment } from 'react';

class DetalleItem extends React.Component {
	render() {
		const item = this.props.item;
		return (
			<React.Fragment>
				<div className="card">
					<div className="card-header">
						<h3 className="card-title">Detalles</h3>
					</div>
					<div className="card-body">
						<div className="mb-4">
							<p>{item.description}</p>
						</div>
						<h4 className="mb-2 font-weight-bold">Especificaciones</h4>
						<div className="row">
							<div className="col-xl-12 col-md-12">
								<div className="table-responsive">
									<table className="table row table-borderless w-100 m-0 text-nowrap ">
										<tbody className="col-lg-12 col-xl-6 p-0">
											<tr>
												<td><span className="font-weight-bold">Precio :</span> ${item.price}</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
					<div className="card-footer">
						<div className="icons">
							<a href="#" className="btn btn-info icons"><i className="si si-share mr-1"></i> Compartir</a>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}

}

export default DetalleItem

