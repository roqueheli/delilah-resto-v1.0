import React, { useContext } from 'react';
import { MainContext } from '../../context/mainContext';
import ModalMyData from './ModalMyData';
import ModalMyOrders from './ModalMyOrders';
import ModalMyAddresses from './ModalMyAddresses';
import '../../styles/modal.scss';

function ModalMyHeader() {
    const { setIsMyHeader, isMyData, setIsMyData, isMyAddresses, setIsMyAddresses, isMyOrders, setIsMyOrders } = useContext(MainContext);

    document.body.addEventListener("keydown", function(event) {
        if (event.code === 'Escape' || event.keyCode === 27) {
            setIsMyHeader(false);
        }
    });

    const handleMyData = (e) => {
        e.preventDefault();
        setIsMyData(true);
        setIsMyAddresses(false);
        setIsMyOrders(false);
    }
    
    const hadleMyAddresses = (e) => {
        e.preventDefault();
        setIsMyAddresses(true);
        setIsMyOrders(false);
        setIsMyData(false);
    }
    
    const handleMyOrders = (e) => {
        e.preventDefault();
        setIsMyOrders(true);
        setIsMyData(false);
        setIsMyAddresses(false);
    }

    const handleClose = (e) => {
        e.preventDefault();
        setIsMyHeader(false)
        setIsMyOrders(false);
        setIsMyData(false);
        setIsMyAddresses(false);
    }

    return (
        <article className='modal is-open' onClick={handleClose}>
            <div className='modal-container modal_head' onClick={(e) => e.stopPropagation()}>
                <button type='button' onClick={handleClose} className='modal-close'>X</button>
                <div className='modal_list_container'>
                    <ul className='modal_header'>
                        <li onClick={handleMyData}>MIS DATOS</li>
                        <li onClick={hadleMyAddresses}>MIS DIRECCIONES</li>
                        <li onClick={handleMyOrders}>MIS PEDIDOS</li>
                    </ul>
                </div>
                {isMyData ? <ModalMyData /> : isMyAddresses ? <ModalMyAddresses /> : isMyOrders ? <ModalMyOrders /> : null}
            </div>
        </article>
    )
}

export default ModalMyHeader;