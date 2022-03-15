import React from 'react';
import '../../styles/modal.scss';

function Loader() {
  return (
    <article className='modal is-open'>
        <img className='animation-loader' src='../../../../images/logo.png' alt="logo-loader" />
    </article>
  )
}

export default Loader;