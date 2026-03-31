import React from 'react';

const Transform = () => {
    return (
        <div className='bg-accent p-20 mt-10'>
            <div className='container mx-auto space-y-10'>
                <div className='text-center space-y-4'>
                    <h1 className='text-3xl font-semibold'>Ready to Transform Your Workflow?</h1>
                    <h5>Join thousands of professionals who are already using Digital tools to work smarter.Start your free trial today.</h5>
                </div>

                <div className='flex flex-col items-center justify-center space-y-4'>
                    <div className='flex gap-5'>
                        <button className='btn rounded-2xl'>Explore Products</button>
                        <button className='btn bg-transparent rounded-2xl'>View Pricing</button>
                    </div>
                    <h5>14-day free trial • No credit card required • Cancel anytime</h5>
                </div>
            </div>
        </div>
    );
};

export default Transform;