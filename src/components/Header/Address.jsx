import React from 'react';
import Search from '../Address/Search';
import '../../styles/address.scss';
import '@reach/combobox/styles.css';

function Address() {  
  return (
    <article className='address__ind'>
      <Search />
      <div className='address__div'>
        <span>Ej: Santiago 123</span>
      </div>
      <input type="text" name="depto" id="depto" placeholder='Indicaciones de entrega' />
      <div className='address__div'>
        <span>Ej: Número de Depto / Casa</span>
      </div>
    </article>
  )
}

export default Address;