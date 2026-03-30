import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const NavBar = () => {
    return (
        <div className="navbar justify-around bg-base-100 shadow-sm">
            <a className="text-3xl font-bold"><span className='text-accent'>DigiTools</span></a>
            
            <ul className='flex gap-8'>
                <li>Products</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Testimonials</li>
                <li>FAQ</li>
            </ul>

            <div className='flex gap-3 items-center'>
                <CiShoppingCart />
                <h4>Login</h4>
                <button className='btn btn-accent rounded-3xl text-white'>Get started</button>
            </div>
        </div>
    );
};

export default NavBar;