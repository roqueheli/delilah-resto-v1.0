import React, { useContext } from 'react';
import { MainContext } from '../../context/mainContext';
import LoginInit from '../Login/LoginInit';
import LoginCode from '../Login/LoginCode';
import LoginRegister from '../Login/LoginRegister';
import '../../styles/modal.scss';

function ModalLogin() {
    const { setIsLogin, isCodeSent, isInit, setInit, setCodeSent } = useContext(MainContext);

    const handleClose = () => {
        setIsLogin(false);
        setInit(true);
        setCodeSent(false);
    }

    return (
        <article className='modal is-open' onClick={handleClose}>
            { isInit ? <LoginInit /> : isCodeSent ? <LoginCode /> : <LoginRegister /> }
        </article>
    )
}

export default ModalLogin;