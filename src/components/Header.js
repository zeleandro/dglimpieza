import React, { useEffect } from 'react';
import './style/header.css'
import {Link} from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
//import Modal from './Auth/ModalLogin'
//import ModalLogin from './Auth/ModalLogin';
// import useUser from '../hooks/UseUser';
// import Websocket from 'react-websocket';



export default function Header(){

	// const {isLogged, logout, name, articulos}= useUser()
	
	const  handleClick= e =>{
		e.preventDefault();
		//   logout();
		//   const logoutToaster = () => toast.info("Te deslogueaste correctamente");
		//   logoutToaster();
	}

	const handleData = (data) =>{
		let result = JSON.parse(data);
		let mensajestr = JSON.parse(result.Message);
		// let oferta = JSON.parse(mensajestr.PostCommentContent);
		// let parseo= JSON.parse(sessionStorage.getItem("articulos"));
		// parseo.map((item, index) => {

		// 	if(item.SubastaId==oferta.SubastaId && item.ArticuloId==oferta.ArticuloId){
		// 		const mensaje = () => toast.warn(
		// 		<div>
    	// 			<Link to={{
        //             pathname: `/detalle/${oferta.SubastaId}/${oferta.ArticuloId}`,
        //             state: {
        //             fromNotifications: true
        //             }
        //         	}}>Se ha realizado una oferta de {oferta.ArticuloSubastaPrecioActual} por el producto {item.ArticuloTitulo}</Link>
  		// 			</div>,{autoClose: 10000});
		// 		 mensaje()
		// 	}
		// })

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

									
									{/* { isLogged 
										?	<ul className="custom"><li><a onClick={handleClick} className="text-dark"><i className="fa fa-sign-in mr-1"></i> <span>Logout</span></a></li>
										<li>
										<Link to="/subastasUsuario" className="text-dark"><i className="fa fa-user mr-1"></i> <span>{name}</span></Link>
									</li></ul>
									
									   : 	<ul className="custom"><li><a href="http://stage.ventanillaunica.chaco.gov.ar/oauth/v2/auth_login?client_id=67_1iibple6ljy8w0ckcs8s4c888kkk8gwg8ws0owc4ogo0oo4www" className="text-dark"><i className="fa fa-sign-in mr-1"></i> <span>Login</span></a>
									</li></ul>
						
									} */}
								
							</div>
						</div>
					</div>
				</div>
				{/* <Websocket url='ws://devapp85.ecom.com.ar/SubastasTest/gxwebsocket?8aa0394f60cc46838f2b434be95c2c57'
             		 onMessage={handleData.bind(this)} debug={true}/>
				<ToastContainer /> */}
			</div>

				
			
        );
      }
    
