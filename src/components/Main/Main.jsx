import React, { useContext } from 'react';
import { MainContext } from '../../context/mainContext';
import Card from '../Card/Card';
import ModalLogin from '../Modals/ModalLogin';
import ModalCart from '../Modals/ModalCart';
import ModalProduct from '../Modals/ModalProduct';
import '../../styles/main.scss';

function Main() {
    const { isLogin, isCart, isProduct } = useContext(MainContext);

    return (
        <main>
            {isLogin ? <ModalLogin /> : null}
            {isCart ? <ModalCart /> : null}
            {isProduct ? <ModalProduct /> : null}
            <section id='hamburguers'>
                <h3>Hamburguesas</h3>
                <div className='cards_container'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
            <section id='hotdogs'>
                <h3>Perros Calientes</h3>
                <div className='cards_container'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
            <section id='arepas'>
                <h3>Arepas</h3>
                <div className='cards_container'>
                    <Card />
                </div>
            </section>
            <section id='combos'>
                <h3>Combos</h3>
                <div className='cards_container'>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
            <section id='drinks'>
                <h3>Bebidas</h3>
                <div className='cards_container'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
            <section id='extras'>
                <h3>Adicionales</h3>
                <div className='cards_container'>
                    <Card />
                    <Card />
                </div>
            </section>
        </main>
    )
}

export default Main;