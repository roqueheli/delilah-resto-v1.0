import React, { useContext } from 'react';
import { MainContext } from '../../context/mainContext';
import '../../styles/modal.scss';

function Counter() {
    const { handleDecrease, handleIncrease, value } = useContext(MainContext);

    return (
            <div className='counter_'>
                <button onClick={handleDecrease}>-</button>
                <h5>{value}</h5>
                <button onClick={handleIncrease}>+</button>
            </div>
    )
}

export default Counter;