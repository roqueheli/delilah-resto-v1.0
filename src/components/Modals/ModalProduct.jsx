import React, { useContext, useState } from 'react';
import { MainContext } from '../../context/mainContext';
import Counter from '../Commons/Counter';
import '../../styles/modal.scss';

const additionals = [
    {
        id: 1,
        name: "Chuleta ahumada",
        price: 1500,
        count: 0
   },
   {
        id: 2,
        name: "Filete de pollo",
        price: 1000,
        count: 0
    },
    {
        id: 3,
        name: "Carne mechada",
        price: 1500,
        count: 0
   },
   {
        id: 4,
        name: "Carne asada",
        price: 2000,
        count: 0
    },
]

function ModalProduct() {
    const [countList, setCountList] = useState(additionals);
    const [countProduct, setCountProduct] = useState(0);
    const { setIsProduct, product, handlePrice } = useContext(MainContext);

    document.body.addEventListener("keydown", function(event) {
        if (event.code === 'Escape' || event.keyCode === 27) {
        setIsProduct(false);
        }
    });

    const handleAddCountAdd = (id) => {
        const newAdditionals = countList.map((newAdditional) => {
            if (newAdditional.id === id) {
                return {
                    id: newAdditional.id,
                    name: newAdditional.name,
                    price: newAdditional.price,
                    count: newAdditional.count + 1
                };
            }
            return newAdditional;
        });
        setCountList(newAdditionals);
    }

    const handleAddCountLess = (id) => {
        const newAdditionals = countList.map((newAdditional) => {
            if (newAdditional.id === id && newAdditional.count > 0) {
                return {
                    id: newAdditional.id,
                    name: newAdditional.name,
                    price: newAdditional.price,
                    count: newAdditional.count - 1
                };
            }
            return newAdditional;
        });
        setCountList(newAdditionals);
    }

    const handleDecrease = () => {
        if (countProduct > 0) {
          setCountProduct(countProduct - 1);
        }
        
    }
    
    return (
        <article className='modal is-open' onClick={() => setIsProduct(false)}>
            <div className='modal-container modal_cart' onClick={(e) => e.stopPropagation()} >
                <button type='button' onClick={() => setIsProduct(false)} className='modal-close'>X</button>
                <div className='modal_subcontainer'>
                    <div className='img_container'>
                        <img src={product.avatar} alt={product.name.toLowerCase()} />
                    </div>
                    <article>
                        <div className='article_subcontainer'>
                            <h1>{product.name}</h1>
                            <p>{product.description}</p>
                        </div>
                        <div className='article_content'>
                            <div className='additionals_header'>
                                <h2>Agrega</h2>
                                <h5>Opcional</h5>
                            </div>
                            <ul>
                                {countList.map((additional, index) => {
                                    return(
                                        <li key={index}>
                                            <div className='li_counter'>
                                                <Counter handleAddCountAdd={handleAddCountAdd} handleAddCountLess={handleAddCountLess} count={additional.count} id={additional.id} />
                                            </div>
                                            <span className='li_tittle'>{additional.name}</span>
                                            <span className='li_price'>{`${handlePrice(additional.price)}`}</span>
                                        </li>
                                    )
                                    })
                                }
                            </ul>
                            <div className='additionals_header'>
                                <h2>Quita un ingrediente</h2>
                                <h5>Opcional</h5>
                            </div>
                            <ul className='remove_container'>
                                <li>
                                    <input type="checkbox" name="checkremove" id="checkremove" />
                                    <span className='li_tittle'>Vegetales</span>
                                    <span>$ 0</span>
                                </li>
                                <li>
                                    <input type="checkbox" name="checkremove" id="checkremove" />
                                    <span className='li_tittle'>Salsa tártara</span>
                                    <span>$ 0</span>
                                </li>
                            </ul>
                        </div>
                        <div className='counter_container'>
                            <div className='counter_'>
                                <button onClick={handleDecrease}>-</button>
                                <h5>{countProduct}</h5>
                                <button onClick={() => setCountProduct(countProduct + 1)}>+</button>
                            </div>
                            <button type='submit'><span>Agregar</span><span>{handlePrice(product.price)}</span></button>
                        </div>
                    </article>
                </div>
            </div>
        </article>
    )
}

export default ModalProduct;