import React, { useContext } from 'react';
import { MainContext } from '../../context/mainContext';
import '../../styles/modal.scss';

function LoginRegister() {
    const { setIsLogin, setRegister, setInit, setCodeSent } = useContext(MainContext);

    const handleLogin = (e) => {
        e.preventDefault();
    }

    const handleClose = () => {
        setIsLogin(false);
        setRegister(false);
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
                        <label>Nombre</label>
                        <input type='text' name='name' id='name' />
                        <label>Teléfono</label>
                        <input type='tel' name='phone' id='phone' placeholder='+56 (9)'/>
                    </div>
                    <button onClick={handleLogin} type='submit'>COMENZAR</button>
                </form>
                <div className='aviso_login'>
                    <p>Continuando, estoy aceptando los <a href="/">Términos y Condiciones</a> de Mercat</p>
                </div>
            </div>
        </div>
    )
}

export default LoginRegister;