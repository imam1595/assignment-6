import React from 'react';
import { toast } from 'react-toastify';

const CartCard = ({showCart, setShowCarts, showCarts}) => {
    console.log(showCart);

    const handleRemoveBtn = () => {
        const filterShowCarts = showCarts.filter(item => item.id !== showCart.id );
        setShowCarts(filterShowCarts);
        toast.success(`${showCart.name} removed successfully!`)
    }

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

                <button onClick={handleRemoveBtn} className="btn btn-outline btn-error">Remove</button>
                
            </div>
        </>
    );
};

export default CartCard;