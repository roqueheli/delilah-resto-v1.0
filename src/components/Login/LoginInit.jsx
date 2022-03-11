import React, { useContext } from 'react';
import { MainContext } from '../../context/mainContext';
import '../../styles/modal.scss';

function LoginInit() {
    const { setIsLogin, setCodeSent } = useContext(MainContext);

    const handleLogin = (e) => {
        e.preventDefault();
        setCodeSent(true);
    }

    return (
        <div className='modal-container modal_login' onClick={(e) => e.stopPropagation()}>
            <h1>Ingresa</h1>
            <button onClick={() => setIsLogin(false)} className='modal-close'>X</button>
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