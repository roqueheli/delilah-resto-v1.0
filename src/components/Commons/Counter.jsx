import React from 'react';
import '../../styles/modal.scss';

function Counter({ handleAddCountAdd, handleAddCountLess, count, id}) {
    const additionalIncrease = () => {
        handleAddCountAdd(id);
    }

    const additionalDecrease = () => {
        handleAddCountLess(id);
    }

    return (
            <div className='counter_'>
                <button onClick={additionalDecrease}>-</button>
                <h5>{count}</h5>
                <button onClick={additionalIncrease}>+</button>
            </div>
    )
}

export default Counter;