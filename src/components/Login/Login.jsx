import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import GoogleLogin from 'react-google-login';
import '../../styles/login.scss';

function Login() {
  const [isLogged, setLogged] = useState(false);
  const [name, setName] = useState(false);

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   setIsLogin(true);
  //   setInit(true);
  //   setRegister(false);
  //   setCodeSent(false);
  // }

  const handleSuccess = (googleData) => {
    setName(googleData.profileObj.name);
    setLogged(true);
  }

  const handleFailure = (result) => {
    alert(result);
    setLogged(false);
  }

  const handleLogout = (e) => {
    e.preventDefault();
    setLogged(false);
  }

  return (
    <>
      {!isLogged ? 
        <>
          <GoogleLogin className='login_' clientId='782195424572-fepg9gi1igknvsrh1g8r00evjkg80jd3.apps.googleusercontent.com' buttonText={`INICIAR SESION`.toLocaleUpperCase()} 
          onSuccess={handleSuccess} onFailure={handleFailure} cookiePolicy={`single_host_origin`}/>
        </>
      :
        <div className='content_logout'>
          <p className='logout_tittle' >{name}</p>
          <button className="button_login" onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} /></button>
        </div>
      }
    </>
  )
}

export default Login;