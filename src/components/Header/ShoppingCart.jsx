import React, { useContext } from 'react';
import { MainContext } from '../../context/mainContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import '../../styles/shoppingcart.scss';

function ShoppingCart() {
  const { setIsCart, shoppingproducts } = useContext(MainContext);

  return (
    <button onClick={() => setIsCart(true)} className='shoppingcart'><FontAwesomeIcon icon={faShoppingBag} />{`${shoppingproducts.length} ITEMS`}</button>
  )
}

export default ShoppingCart;