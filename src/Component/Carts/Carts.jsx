import React from 'react';
import CartCard from './CartCard';
import { toast } from 'react-toastify';

const Carts = ({showCarts, setShowCarts}) => {

    const totalPrice = showCarts.reduce((sum, item) => sum + item.price, 0);

    const handleCheckOut = () => {
        setShowCarts([]);
        toast.success("Checkout successful!");
    }

    return (
        <div>
            <h1 className='text-2xl font-bold'>Your Cart:</h1>
            {
                showCarts.length === 0 ? 
                
                (
                    <div className='container mx-auto p-10 shadow-lg border border-gold-200 mb-10 rounded-lg'>
                        <div className='flex flex-col justify-center items-center'>
                            <img className='h-50 w-50' src="/src/assets/4852154.webp" alt="Empty cart pic" />
                            <h1 className='text-3xl font-bold'>Your Cart is Empty.</h1>
                        </div>
                    </div>
                )   :  
                
                (
                    <>
                        <div className='container mx-auto mb-10'>
                
                            {
                                showCarts.map(showCart => <CartCard key={showCart.id} showCart={showCart} setShowCarts={setShowCarts} showCarts={showCarts} />)
                            }
                        

                            <div className='flex justify-between items-center p-5 bg-black rounded-lg text-white'>
                                <div className='text-3xl font-bold'>Total</div>
                                <div className='text-3xl font-bold'>${totalPrice}</div>
                            </div>

                            <button onClick={handleCheckOut} className='btn btn-accent p-8 w-full rounded-lg mb-10 mt-10'>Proceed To Checkout</button>

                        </div>
                    </>
                )
            }

           
            
        </div>
    );
};

export default Carts;