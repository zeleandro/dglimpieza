import React from 'react';
//import loader from '../images/default/preloader-color.gif'
import {Link} from 'react-router-dom';

function PageError() {
    return (
      <section className="sptb">
      <div class="container text-center">
      <div class="display-1  mb-5">Error</div>
      <h1 class="h2  mb-3">Ha ocurrido un error inesperado</h1>
      <Link class="btn btn-primary" to="/home">Back To Home</Link>
    </div>
    </section>
  );
}

export default PageError;