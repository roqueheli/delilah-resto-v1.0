import React, { useContext } from 'react';
import Search from '../Address/Search';
import { MainContext } from '../../context/mainContext';
import '../../styles/address.scss';
import '@reach/combobox/styles.css';

function Address() {
  const { isAddress } = useContext(MainContext);

  return (
    <article className='address__ind'>
      <Search />
      <div className='address__div'>
        <span>Ej: Santiago 123</span>
      </div>
      {isAddress ? 
        <>
          <input type="text" name="depto" id="depto" placeholder='Indicaciones de entrega' />
          <div className='address__div'>
            <span>Ej: Número de Depto / Casa</span>
          </div>
        </>      
      : null}

    </article>
  )
}

export default Address;