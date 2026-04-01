import React from 'react';
import { PiPlayPauseThin } from 'react-icons/pi';
import banner from '../../assets/banner.png'

const Hero = () => {
    return (
        <div className="bg-white container mx-auto mt-20">

            <div className="flex flex-col text-center justify-between items-center gap-10 lg:flex-row lg:text-left">
                
                <div className='flex flex-col space-y-1'>

                    <div className="badge badge-info mx-auto lg:mx-0">

                        <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></circle><path d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></path><circle cx="12" cy="7.25" r="1.25" fill="currentColor" strokeWidth="2"></circle></g></svg>
                    New: AI-Powered Tools Available
                    </div>

                    <h1 className="text-3xl lg:text-5xl font-bold">Supercharge Your <br /> Digital Workflow</h1>

                    <p className="py-6">
                        Access premium AI tools, design assets, templates, and productivity <br />
                        software—all in one place. Start creating faster today.

                        Explore Products
                    </p>
                    
                    <div className='flex justify-center lg:justify-start gap-5'>

                        <button className="btn btn-accent rounded-2xl">Explore Products</button>
                        <button className='btn bg-transparent rounded-2xl'><PiPlayPauseThin />Watch Demo</button>
                    </div>
                    
                </div>

                <img
                src={banner}
                className="rounded-lg shadow-2xl"
                />
            </div>
        </div>
    );
};

export default Hero;