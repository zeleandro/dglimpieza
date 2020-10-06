import React from 'react';
import loader from './images/preloader.gif'


function PageLoading() {
    return (
    <div id="loading" className="center-block text-center">
        <img src={loader} alt="" />
    </div>
  );
}

export default PageLoading;
