import React from 'react';
import loader from './images/loader.gif'


function MiniLoader() {
    return (
    <div id="loading" className="center-block text-center">
        <img src={loader} alt="" />
    </div>
  );
}

export default MiniLoader;