import React from 'react';

const ActiveUsers = () => {
    return (
        <div className='bg-accent mt-20 p-20'>
            <div className='container mx-auto flex justify-around items-center'>
                <div className=''>
                    <h1 className='text-4xl'>50K+</h1>
                    <h6>Active Users</h6>
                </div>
                <div>
                    <h1 className='text-4xl'>200+</h1>
                    <h6>Premium Tools</h6>
                </div>
                <div>
                    <h1 className='text-4xl'>4.9</h1>
                    <h6>Rating</h6>
                </div>
            </div>
        </div>
    );
};

export default ActiveUsers;