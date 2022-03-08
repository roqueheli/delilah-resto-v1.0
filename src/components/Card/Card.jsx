import React from 'react';
import '../../styles/card.scss';

function Card() {
  return (
    <div className='card_container'>
        <div className='text_container'>
            <div className='text_subcontainer'>
                <h1>Hamburguesa Maracucha</h1>
                <p>Hamburguesa maracucha mixta, 2 proteínas a escoger. Carne, Pollo o Chuleta</p>
            </div>
            <h4>$ 8.000</h4>
        </div>
        <div className='img_container'>
            <img src='../../../../images/burger.png' alt='Burguer' />
        </div>
    </div>
  )
}

export default Card;