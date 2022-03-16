import React, { useContext } from 'react';
import { MainContext } from '../../context/mainContext';
import '../../styles/modal.scss';

function LoginCode() {
    const { setIsLogin, setCodeSent, setInit } = useContext(MainContext);
    
    const handleClose = (e) => {
        e.stopPropagation();
        setCodeSent(false);
        setIsLogin(false)
        setInit(true);
    }
    
    // const handleTryAgain = (e) => {
    //     e.stopPropagation();
    //     setCodeSent(false);
    //     setIsLogin(true);
    //     setInit(true);
    // }

    const handleRegister = (e) => {
        e.stopPropagation();
        setCodeSent(false);
        setInit(false);
    }

    return (
        <div className='modal-container modal_login' onClick={handleClose}>
            <h1>Ingresa</h1>
            <button onClick={handleClose} className='modal-close'>X</button>
            <div className='logincode_container'>
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
                    {/* <a href='#' onClick={handleTryAgain}>Reintentar con otro correo</a> */}
                    <button onClick={handleRegister} type='submit'>INGRESAR</button>
                </form>
            </div>
        </div>
    )
}

export default LoginCode;