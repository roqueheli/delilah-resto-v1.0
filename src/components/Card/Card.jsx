import React, { useContext } from 'react';
import { MainContext } from '../../context/mainContext';
import '../../styles/card.scss';

function Card() {
  const { setIsProduct } = useContext(MainContext);

  return (
    <div onClick={() => setIsProduct(true)} className='card_container'>
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