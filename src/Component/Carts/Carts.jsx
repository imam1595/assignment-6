import React from 'react';
import CartCard from './CartCard';

const Carts = ({showCarts}) => {
    return (
        <div>
            <h1 className='text-2xl font-bold'>Your Cart:</h1>
            <div className='container mx-auto mb-10'>
            
            {
                showCarts.map(showCart => <CartCard key={showCart.id} showCart={showCart} />)
            }
        </div>
        </div>
    );
};

export default Carts;