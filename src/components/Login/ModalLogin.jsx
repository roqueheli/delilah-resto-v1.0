import React, { useContext } from 'react';
import { MainContext } from '../../context/mainContext';
import '../../styles/modal.scss';

function ModalLogin() {
    const { setIsOpen } = useContext(MainContext);

    return (
        <article className='modal is-open' onClick={() => setIsOpen(false)}>
            <div className='modal-container'>
                <button onClick={() => setIsOpen(false)} className='modal-close'>X</button>
            </div>
        </article>
    )
}

export default ModalLogin;