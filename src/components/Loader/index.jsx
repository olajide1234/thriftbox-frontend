import React from 'react';
import loader from '../../assets/img/fluid-loader.gif';

function Loader() {
  return (
    <div className="loader">
      <img src={loader} alt="loading gif" />
    </div>
  );
}

export default Loader;
