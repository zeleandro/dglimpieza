import React from 'react';
import './style/banner.css';

function Banner(props) {
  return (
    <div className="banner-1 cover-image sptb-2 bg-background2" data-image-src="../images/auction.jpg" id="banner_home">
				<div className="header-text mb-0">
					<div className="container">
						<div className="row">
							<div className="col-xl-8 col-lg-12 col-md-12 d-block mx-auto">
								<div className="text-center text-white ">
									<h1 className="">Venta Online <span className="font-weight-bold">#DGLimpieza</span> </h1>
									<p>Mas de {props.size} artículos disponibles</p>
								</div>
								<div className="search-background mb-0">
									<form onSubmit={props.onSubmit}>
										<div className="form row no-gutters">
											
												<div className="form-group  col-xl-10 col-lg-9 col-md-12 mb-0">
													<input type="text" className="form-control input-lg border-right-0" id="text" placeholder="Buscar Producto" name="buscar" value={props.buscadorValue} onChange={props.onChange} />
												</div>
												<div className="col-xl-2 col-lg-3 col-md-12 mb-0">
													<button className="btn btn-lg btn-block btn-secondary">Buscar</button>
												</div>
											
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
  );
}

export default Banner;