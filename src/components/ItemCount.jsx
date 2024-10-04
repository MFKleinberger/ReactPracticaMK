import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const handleIncrement = () => {
        if (count < stock) {
            setCount(prevCount = prevCount + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(prevCount = prevCount - 1);
        }
    };

    const handleAddToCart = () => {
        if (count > 0 && count <= stock) {
            onAdd(count);
        }
    };

return (
    <div>
        <button onClick={handleDecrement}>-</button>
        <span style={{ margin: '0 10px', backgroundColor:'white',color: 'grey', padding: '0 10px'}}>{count}</span>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
    );
};

export default ItemCount;