import React from 'react';
import Logo from './Logo';
import ShoppingCart from './ShoppingCart';
import Login from '../Login/Login';
import Delivery from './Delivery';
import Address from './Address';
import '../../styles/header.scss'

function Header() {
  return (
    <header>
        <Logo />
        <Delivery />
        <Address />
        <Login />
        <ShoppingCart />
    </header>
  )
}

export default Header;