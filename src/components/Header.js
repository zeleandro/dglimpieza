import React, { useEffect, useState } from 'react';
import './style/header.css'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useUser from '../hooks/UseUser';
import { useSelector, useDispatch } from 'react-redux'


export default function Header() {

	const {isLogged, logout, name, token}= useUser()
	const [isCombo, setCombo] = useState(false);
	const cantidad = useSelector(state => state.cantidad)

	const handleCombo = e =>{
		isCombo ? setCombo(false) : setCombo(true)
	}
	
	const  handleClick= e =>{
		e.preventDefault();
		  logout();
		  const logoutToaster = () => toast.info("Te deslogueaste correctamente");
		  logoutToaster();
	}

	return (
		<div className="top-bar">
			<div className="container">
				<div className="row">
					<div className="col-xl-8 col-lg-8 col-sm-4 col-7">
						<div className="top-bar-left d-flex">
							<div className="clearfix">
								<ul className="socials">
									<li>
										<a className="social-icon text-dark" target="blank" href="https://www.facebook.com/DGClean"><i className="fa fa-facebook"></i></a>
									</li>
									<li>
										<a className="social-icon text-dark" target="blank" href="https://www.instagram.com/dg.clean/"><i className="fab fa-instagram"></i></a>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="col-xl-4 col-lg-4 col-sm-8 col-5">
						<div className="top-bar-right">
							<ul className="custom">
								{isLogged
									? <li class="dropdown show">
										<a href="#" onClick={handleCombo} class="text-dark" data-toggle="dropdown" aria-expanded="true"><i class="dropdown-icon si si-user"></i><span>{token}</span></a>
										<div class={`dropdown-menu dropdown-menu-right dropdown-menu-arrow${isCombo ? ' show' : ''}`} x-placement="bottom-end" id="combo">
											<Link to="/cart" className="dropdown-item"><i class="dropdown-icon fas fa-shopping-cart"></i> <span>Mi carrito <span class="badge badge-info">{cantidad}</span></span></Link>
											<a href="#" onClick={handleClick} className="dropdown-item">
												<i className="dropdown-icon si si-power"></i>
												<span>Logout</span>
											</a>

										</div>
									</li>
									: <li><Link to="/login" className="text-dark"><i className="dropdown-icon fa fa-user mr-1"></i><span>Login</span></Link>
									</li>
								}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
}

