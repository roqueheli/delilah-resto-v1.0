import React, { useContext } from 'react';
import { MainContext } from '../../context/mainContext';
import ModalProduct from './ModalProduct';
import '../../styles/modal.scss';

function ModalCart() {
    const { setIsCart, products, handlePrice, isProduct, setIsProduct, setProduct, shoppingproducts } = useContext(MainContext);
    const shoppingArray = products.filter((prods) => shoppingproducts.some((shopprod) => prods._id === shopprod.id));

    document.body.addEventListener("keydown", function(event) {
        if (event.code === 'Escape' || event.keyCode === 27) {
            setIsCart(false);
        }
    });

    const handleProduct = (product) => {
        setIsProduct(true);
        setProduct(product);
    }

    return (
        <>
            {isProduct ? <ModalProduct /> : null}
            <article className='modal is-open' onClick={() => setIsCart(false)}>
                <div className='modal-container modal_cart' onClick={(e) => e.stopPropagation()} >
                    <button onClick={() => setIsCart(false)} className='modal-close'>X</button>
                    <div className='cart_container'>
                        <div className='cart_header'>
                            <h1>Detalle de tu pedido</h1>
                        </div>
                        <div className='cart_main'>
                            {shoppingArray.map((product, index) => {
                                return (
                                    <article key={index}>
                                        <div className='cart_main_tittle'>
                                            <h3>{product.name}</h3>
                                            <p>Queso de mano x1</p>
                                            <span>Modificar</span>
                                            <h5>{handlePrice(product.price)}</h5>
                                        </div>
                                        <div className='helpers_container'>
                                            <img onClick={() => handleProduct(product)} src={product.avatar} alt={product.name} />
                                            <div className='counter_'>
                                                <button>x</button>
                                                <h5>1</h5>
                                                <button>+</button>
                                            </div>
                                        </div>
                                    </article>
                                )
                            })}
                        </div>
                        <div className='cart_footer'>
                            <button>COMPRAR <span>$ 9.500</span></button>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default ModalCart;