import React, { use } from 'react';
import Card from '../Component/Card/Card';

const Datum = ({datumPromise, showCarts, setShowCarts}) => {
    const datum = use(datumPromise);

    // console.log(datum);
    return (
        <div className='container mx-auto lg:grid grid-cols-3 gap-8'>
            {
                datum.map(data => <Card key={data.id} data={data} showCarts={showCarts} setShowCarts={setShowCarts} />)
            }
        </div>
    );
};

export default Datum;