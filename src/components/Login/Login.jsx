import React, { useContext } from 'react';
import { MainContext } from '../../context/mainContext';
import '../../styles/login.scss';

function Login() {
  const { setIsOpen } = useContext(MainContext);

  return (
    <button onClick={() => setIsOpen(true)} className='login_'>INICIAR SESION</button>
  )
}

export default Login;