import React from 'react';
import '../../styles/address.scss';

function Address() {
  return (
    <div className='address_container'>
        <input type="text" placeholder='Ingresa tu dirección'/>
        <button>Cuanto antes</button>
    </div>
  )
}

export default Address;