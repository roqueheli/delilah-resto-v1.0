import React, { useContext } from 'react';
import { MainContext } from '../../context/mainContext';
import '../../styles/login.scss';

function Login() {
  const { setIsLogin } = useContext(MainContext);

  return (
    <button onClick={() => setIsLogin(true)} className='login_'>INICIAR SESION</button>
  )
}

export default Login;