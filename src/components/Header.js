import React, { useEffect } from 'react';
import './style/header.css'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useUser from '../hooks/UseUser';


export default function Header() {

	const { isLogged, logout, name, token } = useUser()

	const handleClick = e => {
		e.preventDefault();
		logout();
		const logoutToaster = () => toast.info("Te deslogueaste correctamente");
		logoutToaster();
	}

	const handleData = (data) => {
		let result = JSON.parse(data);
		let mensajestr = JSON.parse(result.Message);
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
							{isLogged
								? <ul className="custom"><li><a onClick={handleClick} className="text-dark"><i className="fa fa-sign-in mr-1"></i> <span>Logout</span></a></li>
									<li>
										<Link to="/home" className="text-dark"><i className="fa fa-user mr-1"></i> <span>{token}</span></Link>
									</li></ul>
								: <ul className="custom"><li><Link to="/login" className="text-dark"><i className="fa fa-user mr-1"></i> <span>Login</span></Link>
								</li></ul>
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

