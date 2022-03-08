import React from 'react';
import Card from '../Card/Card';
import '../../styles/main.scss';

function Main() {
  return (
    <main>
        <section id='hamburguers'>
            <p>Hamburguesas</p>
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
            <p>Perros Calientes</p>
            <div className='cards_container'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>
        <section id='arepas'>
            <p>Arepas</p>
            <div className='cards_container'>
                <Card />
            </div>
        </section>
        <section id='drinks'>
            <p>Bebidas</p>
            <div className='cards_container'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>
        <section id='extras'>
            <p>Adicionales</p>
            <div className='cards_container'>
                <Card />
                <Card />
            </div>
        </section>
    </main>
  )
}

export default Main;