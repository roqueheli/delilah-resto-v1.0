import React, { useContext } from 'react';
import { MainContext } from '../../context/mainContext';
import Card from '../Card/Card';
import ModalMyHeader from '../Modals/ModalMyHeader';
import ModalCart from '../Modals/ModalCart';
import ModalProduct from '../Modals/ModalProduct';
import Loader from '../Commons/Loader';
import '../../styles/main.scss';

function Main() {
    const { isCart, isProduct, prods, isLoading, isMyHeader } = useContext(MainContext);

    return (
        <main>
            {isCart ? <ModalCart /> : null}
            {isProduct ? <ModalProduct /> : null}
            {isMyHeader ? <ModalMyHeader /> : null}
            {!isLoading ? <Loader /> : prods && prods.map((categories, index) => {
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