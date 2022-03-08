import React from 'react';
import '../../styles/navigator.scss';

function Navigator() {
  return (
    <nav>
        <ul>
            <li><a href="#hamburguers" activeclassname='active'>Hamburguesas</a></li>
            <li><a href="#hotdogs" activeclassname='active'>Perros Calientes</a></li>
            <li><a href="#arepas" activeclassname='active'>Arepas</a></li>
            <li><a href="#drinks" activeclassname='active'>Bebidas</a></li>
            <li><a href="#extras" activeclassname='active'>Adicionales</a></li>
        </ul>
    </nav>
  )
}

export default Navigator