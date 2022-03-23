import React, { useContext } from 'react';
import { MainContext } from '../../context/mainContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Address from './Address';
import '../../styles/delivery.scss';

function Delivery() {
  const { isAddress, setAddress } = useContext(MainContext);

  const handlePickUp = (e) => {
    e.preventDefault();
    setAddress(!isAddress);
    // setValue('Froilán Roa 5739, La Florida, Chile', false);
  }
  
  return (
    <div className='delivery__'>
      <div className='delivery_container'>
        <h2>¿Cómo quieres tu pedido?</h2>
        <div className='delivery_subcontainer'>
          <button onClick={() => setAddress(!isAddress)} className='delivery_'>{`Delivery `}<FontAwesomeIcon icon={faShippingFast} /></button>
          <button onClick={handlePickUp} className='withdraw_'>{`Retiro `}<FontAwesomeIcon icon={faMapMarkerAlt} /></button>
        </div>
      </div>
      {isAddress ? <Address /> : null}
    </div>
  )
}

export default Delivery;