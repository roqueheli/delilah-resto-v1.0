import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import MainProvider from '../src/context/mainContext';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './components/App';
import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider domain='dev-q7r8kmjo.us.auth0.com' clientId='w1t0yCXp5xJaF6iiP9M27HocYrtD17qm' redirectUri={window.location.origin}>
        <MainProvider>
          <App />
        </MainProvider>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
