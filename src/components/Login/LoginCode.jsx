import React, { useContext } from 'react';
import { MainContext } from '../../context/mainContext';
import '../../styles/modal.scss';

function LoginCode() {
    const { setIsLogin, setCodeSent } = useContext(MainContext);
    
    const handleCode = (e) => {
        e.preventDefault();
        setCodeSent(false);
    }

    const handleClose = (e) => {
        e.stopPropagation();
        setCodeSent(false);
    }

    return (
        <div className='modal-container modal_login' onClick={handleClose}>
            <h1>Ingresa</h1>
            <button onClick={() => setIsLogin(false)} className='modal-close'>X</button>
            <div className='form_container'>
                <form method='POST'>
                    <div className='code_container'>
                        <label>Ingresa con tu código de verificación enviado a tu correo</label>
                        <div className='code_subcontainer'>
                            <input type='text' minLength='1' maxLength='1' name='code' id='code' />
                            <input type='text' minLength='1' maxLength='1' name='code' id='code' />
                            <input type='text' minLength='1' maxLength='1' name='code' id='code' />
                            <input type='text' minLength='1' maxLength='1' name='code' id='code' />
                            <input type='text' minLength='1' maxLength='1' name='code' id='code' />
                        </div>
                    </div>
                    <a href='/' onClick={handleCode}>Reintentar con otro correo</a>
                    <button onClick={handleCode} type='submit'>INGRESAR</button>
                </form>
            </div>
        </div>
    )
}

export default LoginCode;