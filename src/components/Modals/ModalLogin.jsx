import React, { useContext } from 'react';
import { MainContext } from '../../context/mainContext';
import LoginInit from '../Login/LoginInit';
import LoginCode from '../Login/LoginCode';
import '../../styles/modal.scss';

function ModalLogin() {
    const { setIsLogin, isCodeSent } = useContext(MainContext);

    return (
        <article className='modal is-open' onClick={() => setIsLogin(false)}>
            {!isCodeSent ? <LoginInit /> : <LoginCode />}
        </article>
    )
}

export default ModalLogin;