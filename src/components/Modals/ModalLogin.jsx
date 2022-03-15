import React, { useContext } from 'react';
import { MainContext } from '../../context/mainContext';
import LoginInit from '../Login/LoginInit';
import LoginCode from '../Login/LoginCode';
import LoginRegister from '../Login/LoginRegister';
import '../../styles/modal.scss';

function ModalLogin() {
    const { setIsLogin, isCodeSent, isRegister, isInit, setRegister, setInit, setCodeSent } = useContext(MainContext);

    const handleClose = () => {
        setIsLogin(false);
        setRegister(false);
        setInit(true);
        setCodeSent(false);
    }

    return (
        <article className='modal is-open' onClick={handleClose}>
            { isInit ? <LoginInit /> : null }
            { isCodeSent ? <LoginCode /> : null }
            { isRegister ? <LoginRegister /> : null }
        </article>
    )
}

export default ModalLogin;