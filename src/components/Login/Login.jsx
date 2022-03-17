import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import GoogleLogin from 'react-google-login';
import '../../styles/login.scss';

function Login() {
  const [loginData, setLoginData] = useState(localStorage.getItem('loginData')
  ? JSON.parse(JSON.stringify(localStorage.getItem('loginData')))
  : null );
  
  console.log('localStorage-1', localStorage);
  
  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   setIsLogin(true);
  //   setInit(true);
  //   setRegister(false);
  //   setCodeSent(false);
  // }

  const handleSuccess = (googleData) => {
    localStorage.setItem('loginData', googleData.profileObj.name);
    setLoginData(googleData.profileObj.name);
    console.log('localStorage-2', localStorage);
  }

  const handleFailure = () => {
    localStorage.removeItem('loginData');
    setLoginData(null);
  }

  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setLoginData(null);
  }

  return (
    <>
      {!loginData ? 
        <>
          <GoogleLogin icon={false}
          render={renderProps => (
            <button onClick={renderProps.onClick} disabled={renderProps.disabled} className='login_'>INICIAR SESION</button>
          )}
          className='login_' clientId='782195424572-fepg9gi1igknvsrh1g8r00evjkg80jd3.apps.googleusercontent.com' buttonText={`INICIAR SESION`.toLocaleUpperCase()} 
          onSuccess={handleSuccess} onFailure={handleFailure} cookiePolicy={`single_host_origin`}/>
        </>
      :
        <div className='content_logout'>
          <p className='logout_tittle' >{loginData}</p>
          <button className="button_login" onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} /></button>
        </div>
      }
    </>
  )
}

export default Login;