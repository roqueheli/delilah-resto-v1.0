import React, { useContext } from 'react';
import { MainContext } from '../../context/mainContext';
import Card from '../Card/Card';
import ModalLogin from '../Modals/ModalLogin';
import ModalCart from '../Modals/ModalCart';
import ModalProduct from '../Modals/ModalProduct';
import Loader from '../Commons/Loader';
import '../../styles/main.scss';

function Main() {
    const { isLogin, isCart, isProduct, data, isLoading } = useContext(MainContext);

    return (
        <main>
            {isLogin ? <ModalLogin /> : null}
            {isCart ? <ModalCart /> : null}
            {isProduct ? <ModalProduct /> : null}
            {!isLoading ? <Loader /> : data && data.map((categories, index) => {
                return (
                    <section id={categories.name.toLowerCase()} key={index}>
                        <h3>{categories.name}</h3>
                        <div className='cards_container'>
                            <Card dataProducts={categories.product} />
                        </div>
                    </section>
                )
            })}
        </main>
    )
}

export default Main;