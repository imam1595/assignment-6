import React from 'react';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#101727] text-gray-200 p-30'>
            
            <div className='flex flex-col lg:flex-row lg:justify-between lg:space-x-10 space-y-10 lg:space-y-0 mb-5'>

                <div>
                    <h1 className='text-3xl font-bold mb-6'>DigiTools</h1>
                    <p>Premium digital tools for <br />creators, professionals, and <br />businesses. Work smarter with <br /> our suite of powerful tools.</p>
                </div>

                <div>
                    <h2 className='text-2xl font-bold mb-6'>Product</h2>
                    <div className='space-y-5'>
                        <h5>Features</h5>
                        <h5>Pricing</h5>
                        <h5>Templates</h5>
                        <h5>Integrations</h5>
                    </div>
                </div>

                <div>
                    <h2 className='text-2xl font-bold mb-6'>Company</h2>
                    <div className='space-y-5'>
                        <h5>About</h5>
                        <h5>Blog</h5>
                        <h5>Careers</h5>
                        <h5>Press</h5>
                    </div>
                </div>

                <div className='space-y-5'>
                    <h2 className='text-2xl font-bold mb-6'>Resources</h2>
                    <div>
                        <h5>Documentation</h5>
                        <h5>Help Center</h5>
                        <h5>Community</h5>
                        <h5>Contact</h5>
                    </div>
                </div>

                <div>
                    <h2 className='text-2xl font-bold mb-6'>Social Links</h2>
                    <div className='flex gap-4'>
                        <FaInstagramSquare />
                        <FaFacebookSquare />
                        <FaXTwitter />
                    </div>
                </div>

            </div>

            <hr />

            <div className='flex flex-col text-center space-y-5 lg:flex-row lg:justify-around mt-10'>
                <a href="#">© 2026 Digital tools. All rights reserved.</a>

                <ul className='flex flex-col space-y-2 lg:flex-row lg:gap-10'>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Cookies</li>
                </ul>
            </div>
            
        </div>
    );
};

export default Footer;