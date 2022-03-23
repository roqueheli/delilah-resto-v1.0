import React from 'react';
import '../../styles/addaddresses.scss';

function Locate({ panTo }) {
  return (
    <button className='locate' onClick={() => {
        panTo({
            lat: -33.5107512,
            lng: -70.6020209
        });
    }}><img src="../../../../images/logo.png" alt="abuelo burguer's logo" /></button>
  )
}

export default Locate;