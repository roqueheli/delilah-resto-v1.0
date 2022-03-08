import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/logo.css';

function Logo() {
  return (
    <Link className='logo_' to='/'><img src='../../../../images/logo.png' alt='commerce logo' /></Link>
  )
}

export default Logo