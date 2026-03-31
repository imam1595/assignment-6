import React from 'react';

const CartCard = ({showCart}) => {
    console.log(showCart);
    return (
        <>
            
            <div className='flex justify-between items-center p-10 shadow-lg border border-gold-200 mb-10 rounded-lg'>
                <div className='flex items-center gap-4'>
                    <img className='h-10 w-10 object-contain' src={showCart.icon} alt="" />
                    <div>
                        <h1 className='font-bold'>{showCart.name}</h1>
                        <h1 className='font-bold'>$ {showCart.price}</h1>
                    </div>
                </div>

                <button className="btn btn-outline btn-error">Remove</button>
            </div>
        </>
    );
};

export default CartCard;