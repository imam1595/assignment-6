import React, { use } from 'react';
import Card from '../Component/Card/Card';

const Datum = ({datumPromise, showCarts, setShowCarts}) => {
    const datum = use(datumPromise);

    // console.log(datum);
    return (
        <div className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {datum.map((data) => (
                    <Card
                        key={data.id}
                        data={data}
                        showCarts={showCarts}
                        setShowCarts={setShowCarts}
                    />
                ))}
            </div>
        </div>
    );
};

export default Datum;