import React from 'react';

import userImg from '../../assets/user.png';
import packageImg from '../../assets/package.png';
import rocketImg from '../../assets/rocket.png';

const GetStarted = () => {
    return (
        <div className=''>

            <div className='container mx-auto space-y-10 mt-20'>
                <div className='text-center space-y-5'>
                    <h1 className='text-3xl'>Get Started in 3 Steps</h1>
                    <h5>Start using premium digital tools in minutes, not hours</h5>
                </div>

                <div>
                    <div className='flex justify-between items-center'>
                        

                        <div className='h-90 w-90 shadow-xl flex flex-col items-center justify-center text-center relative'>

                            <div className="badge badge-accent rounded-full absolute top-3 right-3">01</div>

                            <div className='w-20 h-20'>
                                <img className='w-full h-full object-contain p-2 bg-gray-200 rounded-full' src={userImg} alt="user pic" />
                            </div>
                            
                            <h3 className='text-xl font-bold'>Create Account</h3>
                            <h5>Sign up for free in seconds. No credit card required to get started.</h5>
                        
                        </div>

                        <div className='h-90 w-90 shadow-xl flex flex-col items-center justify-center text-center relative'>

                            <div className="badge badge-accent rounded-full absolute top-3 right-3 shadow-5xl">02</div>

                            <div className='h-20 w-20'>
                                <img className='w-full h-full object-contain p-2 bg-gray-200 rounded-full' src={packageImg} alt="user pic" />
                            </div>
                            
                            <h3 className='text-xl font-bold'>Choose Products</h3>
                            <h5>Browse our catalog and select the tools that fit your needs.</h5>
                        
                        </div>

                        <div className='h-90 w-90 shadow-xl flex flex-col items-center justify-center text-center relative'>

                            <div className="badge badge-accent rounded-full absolute top-3 right-3 shadow-5xl">03</div>

                            <div className='h-20 w-20'>
                                <img className='w-full h-full object-contain p-3 bg-gray-200 rounded-full' src={rocketImg} alt="user pic" />
                            </div>
                            
                            <h3 className='text-xl font-bold'>Start Creating</h3>
                            <h5>Download and start using your premium tools immediately.</h5>
                        
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default GetStarted;