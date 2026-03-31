import React, { useState } from 'react';
import FeaturesCard from './FeaturesCard';

const Card = ({data, setShowCarts}) => {

    const [buyNow , setBuyNow] = useState(false);

    // console.log(data);

    // console.log(data.features);
    const features = data.features;
    
    // console.log(features);

    const handleBuyBtn = () => {
        // console.log(data);

        setBuyNow(true);
        
        setShowCarts(curs => {
            const exist = curs.find(cur => cur.id === data.id);

            if(exist) {
                return curs;
            } else {
                return [...curs, data]
            }
        })
        
    }

    

    return (
        <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
                
                <div className='flex justify-between'>
                    <img className='h-10 w-10 object-contain' src={data.icon} alt="" />
                    <span className="badge badge-xs badge-warning">{data.tagType}</span>
                </div>

                <h1 className='text-3xl font-bold'>{data.name}</h1>
                <p>{data.description}</p>
                <h1 className='text-2xl font-bold'>$ {data.price} / {data.period}</h1>

                <ul className="mt-6 flex flex-col gap-2 text-xs">

                    {
                        features.map((feature, ind) => <FeaturesCard key={ind} feature={feature} ind={ind} />)
                    }


                </ul>
                <div className="mt-6">
                    <button onClick={handleBuyBtn} className={buyNow ? "btn btn-success btn-block" : "btn btn-accent btn-block"}>{buyNow ? "Add to Cart" : "Buy Now"}</button>
                </div>
            </div>
        </div>
    );
};

export default Card;