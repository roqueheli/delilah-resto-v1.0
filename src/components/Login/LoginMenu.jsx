import React, { useContext } from 'react';
import { MainContext } from '../../context/mainContext';
import '../../styles/loginmenu.scss';

function LoginMenu() {
  const { setIsMyHeader, setIsMyData, setIsMyAddresses, setIsMyOrders } = useContext(MainContext);
  
  const handleMyData = (e) => {
    e.preventDefault();
    setIsMyHeader(true);
    setIsMyData(true);
  }

  const hadleMyAddresses = (e) => {
    e.preventDefault();
    setIsMyHeader(true);
    setIsMyAddresses(true);
  }

  const handleMyOrders = (e) => {
    e.preventDefault();
    setIsMyHeader(true);
    setIsMyOrders(true);
  }

  return (
    <ul className='menu_list'>
        <li onClick={handleMyData}>MIS DATOS</li>
        <li onClick={hadleMyAddresses}>MIS DIRECCIONES</li>
        <li onClick={handleMyOrders}>MIS PEDIDOS</li>
    </ul>
  )
}

export default LoginMenu;