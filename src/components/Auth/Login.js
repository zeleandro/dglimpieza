import React, { useState } from 'react';
import PageLoading from '../PageLoading';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useUser from "../../hooks/UseUser";

export default function Login(props) {

	const { login, isLogged } = useUser();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const onChange = (e) => {
		switch (e.target.name) {
			case 'username': setUsername(e.target.value);
			case 'password': setPassword(e.target.value);
			default: { }
		}
		console.log('user: ' + username + ' password: ' + password)
	}

	const submitForm = (e) => {

		e.preventDefault();

		try {
			fetch('https://fakestoreapi.com/users/1')
				.then(response => {
					if (response.ok) {
						return response.json();
					} else {
						throw new Error('Error en las credenciales');
					}
				})
				.then(data => {
					sessionStorage.setItem("token", data.email)
					login(username, data.name.firstname, data.name.lastname);
					console.log(data.email);
					const toasterlogued = () => toast.success("Bienvenido");
					toasterlogued();
				})
				.catch((error) => {
					const toastererror = () => toast.error("Error en las credenciales. Vuelva a intentar");
					toastererror();
					console.log(error)
				});
		} catch (error) {
			console.log("error en la api");

		}
	}


	if (isLogged) {
		return <Redirect to="/home" />;
	}


	return (
		<React.Fragment>
			<div className="bannerimg cover-image bg-background3" data-image-src="../assets/images/banners/banner2.jpg" >
				<div className="header-text mb-0">
					<div className="container">
						<div className="text-center text-white ">
							<h1 className="">Login</h1>
						</div>
					</div>
				</div>
			</div>

			<section className="sptb">
				<div className="container customerpage">
					<div className="row">
						<div className="col-lg-4 d-block mx-auto">
							<div className="row">
								<div className="col-xl-12 col-md-12 col-md-12">
									<div className="card mb-0">
										<div className="card-header">
											<h3 className="card-title">Ingresar a tu cuenta</h3>
										</div>
										<form onSubmit={submitForm}>
											<div className="card-body">
												<div className="form-group">
													<label className="form-label text-dark">Usuario</label>
													<input type="text" className="form-control" placeholder="Nombre de usuario" name="username" value={username} onChange={onChange} />
												</div>
												<div className="form-group">
													<label className="form-label text-dark">Password</label>
													<input type="password" className="form-control" id="exampleInputPassword1" name="password" placeholder="Contrasena" value={password} onChange={onChange} />
												</div>

												<div className="form-group">
													<label className="custom-control custom-checkbox">
														<a href="forgot-password.html" className="float-right small text-dark mt-1">I forgot password</a>
														<input type="checkbox" className="custom-control-input" />
														<span className="custom-control-label text-dark">Remember me</span>
													</label>
												</div>
												<div className="form-footer mt-2">
													<input type="submit" className="btn btn-primary btn-block" />
												</div>
												<div className="text-center  mt-3 text-dark">
													Don't have account yet? <a href="register.html">SignUp</a>
												</div>

											</div>
										</form>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</section>

			<ToastContainer />

		</React.Fragment>
	);

}