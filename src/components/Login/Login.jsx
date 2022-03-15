import React, { useContext } from 'react';
import { MainContext } from '../../context/mainContext';
import '../../styles/login.scss';

function Login() {
  const { setIsLogin, setInit, setRegister, setCodeSent } = useContext(MainContext);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLogin(true);
    setInit(true);
    setRegister(false);
    setCodeSent(false);
  }

  return (
    <button onClick={handleLogin} className='login_'>INICIAR SESION</button>
  )
}

export default Login;