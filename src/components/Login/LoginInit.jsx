import React, { useContext } from 'react';
import { MainContext } from '../../context/mainContext';
import '../../styles/modal.scss';

function LoginInit() {
    const { setIsLogin, setCodeSent, setInit } = useContext(MainContext);

    const handleLogin = (e) => {
        e.stopPropagation();
        setCodeSent(true);
        setInit(false);
    }

    const handleClose = () => {
        setIsLogin(false);
        setInit(true);
        setCodeSent(false);
    }

    return (
        <div className='modal-container modal_login' onClick={(e) => e.stopPropagation()}>
            <h1>Ingresa</h1>
            <button onClick={handleClose} className='modal-close'>X</button>
            <div className='form_container'>
                <form method='POST'>
                    <div>
                        <label>Correo electrónico</label>
                        <input type='email' name='email' id='email' />
                    </div>
                    <button onClick={handleLogin} type='submit'>INGRESAR</button>
                </form>
                <div className='aviso_login'>
                    <p>Recibirás un código de verificación en tu correo para ingresar</p>
                </div>
            </div>
        </div>
    )
}

export default LoginInit;