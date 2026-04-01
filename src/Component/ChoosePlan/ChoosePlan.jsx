import React, { use } from 'react';
import ChoosePlanCard from '../ChoosePlanCard/ChoosePlanCard';

const ChoosePlan = ({datumPromise}) => {

    const datum = use(datumPromise);
    // console.log(datum);

    return (
        <div className='mt-20 mb-20 p-10 space-y-10'>

            <div className='container mx-auto'>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold'>Simple, Transparent Pricing</h1>
                    <h5>Choose the plan that fits your needs. Upgrade or downgrade anytime.</h5>
                </div>

                <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10'>
                    {
                        datum.slice(0, 3).map(data => <ChoosePlanCard key={data.id} data={data} />)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default ChoosePlan;