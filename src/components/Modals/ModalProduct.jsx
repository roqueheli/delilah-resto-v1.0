import React, { useContext } from 'react';
import { MainContext } from '../../context/mainContext';
import '../../styles/modal.scss';

function ModalProduct() {
    const { setIsProduct, product } = useContext(MainContext);

    return (
        <article className='modal is-open' onClick={() => setIsProduct(false)}>
            <div className='modal-container modal_cart' onClick={(e) => e.stopPropagation()} >
                <button type='button' onClick={() => setIsProduct(false)} className='modal-close'>X</button>
                <div className='modal_subcontainer'>
                    <div className='img_container'>
                        <img src={product.productImages[0].location} alt={product.name.toLowerCase()} />
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
                                <li>
                                    <div className='li_counter'>
                                        <button>-</button>
                                        <h5>0</h5>
                                        <button>+</button>
                                    </div>
                                    <span className='li_tittle'>Chuleta ahumada</span>
                                    <span className='li_price'>$ 1.500</span>
                                </li>
                                <li>
                                    <div className='li_counter'>
                                        <button>-</button>
                                        <h5>0</h5>
                                        <button>+</button>
                                    </div>
                                    <span className='li_tittle'>Filete de pollo</span>
                                    <span className='li_price'>$ 1.000</span>
                                </li>
                                <li>
                                    <div className='li_counter'>
                                        <button>-</button>
                                        <h5>0</h5>
                                        <button>+</button>
                                    </div>
                                    <span className='li_tittle'>Carne mechada</span>
                                    <span className='li_price'>$ 1.500</span>
                                </li>
                                <li>
                                    <div className='li_counter'>
                                        <button>-</button>
                                        <h5>0</h5>
                                        <button>+</button>
                                    </div>
                                    <span className='li_tittle'>Carne asada</span>
                                    <span className='li_price'>$ 2.000</span>
                                </li>
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
                            <div>
                                <button>-</button>
                                <h5>0</h5>
                                <button>+</button>
                            </div>
                            <button type='submit'><span>Agregar</span><span>{`$ ${product.price}`}</span></button>
                        </div>
                    </article>
                </div>
            </div>
        </article>
    )
}

export default ModalProduct;