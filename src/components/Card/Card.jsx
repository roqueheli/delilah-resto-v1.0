import React, { useContext } from 'react';
import { MainContext } from '../../context/mainContext';
import '../../styles/card.scss';

function Card({ dataProducts }) {
  const { setIsProduct, setProduct } = useContext(MainContext);

  const handleClick = (product) => {
    setIsProduct(true);
    setProduct(product);
  }

  return (
    <>
      {dataProducts && dataProducts.map((product, index) => {
        return (
            <div onClick={() => handleClick(product)} className='card_container' key={index}>
                <div className='text_container'>
                    <div className='text_subcontainer'>
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                    </div>
                    <h4>{`$ ${product.price}`}</h4>
                </div>
                <div className='img_container'>
                    <img src={product.productImages[0].location} alt={product.name.toLowerCase()} />
                </div>
            </div> 
          )
      })}
    </>
  )
}

export default Card;