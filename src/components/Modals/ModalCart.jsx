import React, { useContext } from 'react';
import { MainContext } from '../../context/mainContext';
import '../../styles/modal.scss';

function ModalCart() {
    const { setIsCart } = useContext(MainContext);

    return (
        <article className='modal is-open' onClick={() => setIsCart(false)}>
            <div className='modal-container modal_cart' onClick={(e) => e.stopPropagation()} >
                <button onClick={() => setIsCart(false)} className='modal-close'>X</button>
            </div>
        </article>
    )
}

export default ModalCart;