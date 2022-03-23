import React, { useContext } from 'react';
import { MainContext } from '../../context/mainContext';
import ModalAddAddress from '../Address/ModalAddAddress';
import '../../styles/myaddresses.scss';

function ModalMyAddresses() {
  const { isAddAddress, setAddAddress } = useContext(MainContext);

  const handleAddAddress = (e) => {
    e.preventDefault();
    setAddAddress(true);
  }

  return (
    <>
      {isAddAddress ? <ModalAddAddress /> : null}
      <article onClick={(e) => e.stopPropagation()}>
        <h1>Mis direcciones</h1>
        <div className='addresses_container'>
          <div className='addreses_text'>
            <input type="radio" />
            <input className='addresses_input_text' type='text' name='address' id='address' disabled value='Calle Nueva 120. La Florida'/>
          </div>
          <div className='addresses_footer'>
              <button onClick={handleAddAddress}>AGREGAR DIRECCION</button>
          </div>
        </div>
      </article>
    </>
  )
}

export default ModalMyAddresses;