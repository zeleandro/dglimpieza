import React from 'react';
import {Link} from 'react-router-dom';
function NotFound() {
  return (
    <div className=" page page-h ">
			<div className="page-content z-index-10">
				<div className="container text-center">
					<div className="display-1  mb-5">400</div>
					<h1 className="h2  mb-3">Page Not Found</h1>
					<p className="h4 font-weight-normal mb-7 leading-normal ">Oops!!!! estas tratando de acceder a una pagina que no existe</p>
					
					<Link className="btn btn-primary" to="/home">Ir a Inicio</Link>
				</div>
			</div>
		</div>
  );
}

export default NotFound;