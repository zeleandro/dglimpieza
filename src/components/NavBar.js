import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import './style/navbar.css'


const Navbar = (props) => (
	<React.Fragment>
		<div className={`horizontal-header clearfix sticky trelu${props.movil}`}>
			<div className="container">
				<a id="horizontal-navtoggle" className="animated-arrow"><span></span></a>
				<span className="smllogo"><img src="../assets/images/brand/logo1.png" width="120" alt="" /></span>
			</div>
		</div>
		<div>
			<div className={`horizontal-main clearfix${props.estilo}`} >
				<div className="horizontal-mainwrapper container clearfix">
					<div className="desktoplogo">
						<div className="text-center"><h2 className=""><span className="font-weight-bold">DG Limpieza</span> </h2></div>
					</div>
					<nav className="horizontalMenu clearfix d-md-flex">
						<ul className="horizontalMenu-list">
							<li aria-haspopup="true">
								<Link to="/home" >
									Productos
                                    </Link>
							</li>
							<li aria-haspopup="true"><a href="ofertas">Ofertas </a></li>
							<li aria-haspopup="true"><a href="novedades">Novedades </a></li>
							<li aria-haspopup="true"><a href="about">Sobre DG </a></li>
							<li aria-haspopup="true"><a href="contact"> Contacto <span className="wsarrow"></span></a></li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</React.Fragment>
)
export default Navbar

