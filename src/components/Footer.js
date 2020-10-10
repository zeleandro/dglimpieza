import React from 'react';

function Footer() {
  return (
    <section>
			<footer className="bg-dark text-white">
				<div className="footer-main">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-12">
								<h6>Diego Grnja</h6>
								<p className="fs-14 mb-1">Ingeniero Químico</p>
							</div>
							<div className="col-lg-2 col-md-12">
								<h6>Redes Sociales</h6>
								<ul className="list-unstyled mb-0">
									<li><a target="blank" href="https://www.facebook.com/DGClean">Facebook: DGClean</a></li>
									<li><a target="blank" href="https://www.instagram.com/dg.clean/">Instagram: @dg.clean</a></li>
								</ul>
							</div>
							<div className="col-lg-3 col-md-12">
								<h6>Contacto</h6>
								<ul className="list-unstyled mb-0">
									<li>Dirección: Orquídeas 385</li>
									<li>Teléfono: +54 362 4223010</li>
									<li>Mail: diego_grnja@hotmail.com</li>
								</ul>
							</div>
							<div className="col-lg-3 col-md-12">
								<h6 className="mb-2">Envíos sin cargo</h6>
									<p className="fs-14 mb-1">En Resistencia</p>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-dark text-white p-0">
					<div className="container">
						<div className="row d-flex">
							<div className="col-lg-8 col-sm-12  mt-2 mb-2 text-left ">
								Copyright © 2020. Todos los derechos reservados.
							</div>
							<div className="col-lg-4 col-sm-12 ml-auto mb-2 mt-2">
								<ul className="social mb-0">
									<li>
										<a className="social-icon" target="blank" href="https://www.facebook.com/DGClean"><i className="fa fa-facebook"></i></a>
									</li>
									<li>
										<a className="social-icon" target="blank" href="https://www.instagram.com/dg.clean"><i className="fab fa-instagram"></i></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</section>
  );
}

export default Footer;

