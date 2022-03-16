import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import '../../styles/login.scss';

function Login() {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   setIsLogin(true);
  //   setInit(true);
  //   setRegister(false);
  //   setCodeSent(false);
  // }

  return (
    <>
      {!isAuthenticated ? 
        <button onClick={() => loginWithRedirect()} className='login_'>INICIAR SESION</button>  
      :
        <div className='content_logout'>
          <p className='logout_tittle' >{user.name}</p>
          <button className="button_login" onClick={() => logout({returnTo: window.location.origin})}><FontAwesomeIcon icon={faSignOutAlt} /></button>
        </div>
      }
    </>
  )
}

export default Login;