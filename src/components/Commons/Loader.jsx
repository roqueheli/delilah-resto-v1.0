import React from 'react';
import '../../styles/modal.scss';

function Loader() {
  return (
    <article className='modal is-open'>
        <div className='animation-loader'>
        </div>
        <img className='loader_img' src='../../../../images/logo.png' alt="logo-loader" />
    </article>
  )
}

export default Loader;