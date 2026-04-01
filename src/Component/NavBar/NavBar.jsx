import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const NavBar = ({showCarts}) => {
    return (
        <div className="navbar justify-around items-center bg-base-100 shadow-sm">
            <a className="text-3xl font-bold"><span className='text-accent'>DigiTools</span></a>
            
            <ul className='flex flex-col lg:flex-row lg:gap-8'>
                <li>Products</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Testimonials</li>
                <li>FAQ</li>
            </ul>

            <div className='flex gap-3 items-center'>
                <div className='flex justify-center items-center relative h-15'>
                    
                    <CiShoppingCart /> {showCarts.length === 0 ? null : <><span className='text-white absolute left-2 top-1 w-5 h-5 rounded-2xl badge badge-error'>{showCarts.length}</span> </>}
                    
                </div>
                <h4>Login</h4>
                <button className='btn btn-accent rounded-3xl'>Get started</button>
            </div>
        </div>
    );
};

export default NavBar;