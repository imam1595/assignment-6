import React, { useState } from 'react';
import FeaturesCard from './FeaturesCard';
import { toast } from 'react-toastify';
import { IoMdCheckmark } from 'react-icons/io';

const Card = ({data, setShowCarts}) => {

    const [buyNow , setBuyNow] = useState(false);

    // console.log(data);

    // console.log(data.features);
    const features = data.features;
    
    // console.log(features);

    const handleBuyBtn = () => {
        // console.log(data);

        // setBuyNow(true);

        // alert("you agt it");
        // toast.success("Item added to the cart!");
        
        setShowCarts(curs => {
            const exist = curs.find(cur => cur.id === data.id);

            if(exist) {
                toast.warning("Already exist!");
                return curs;
            } else {
                toast.success("Item added to the cart!");
                setBuyNow(true);
                return [...curs, data]
            }
        })
        
    }

    

    return (
        <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
                
                <div className='flex justify-between'>
                    <img className='h-10 w-10 object-contain' src={data.icon} alt="icon" />
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
                    <button onClick={handleBuyBtn} className={buyNow ? "btn btn-success btn-block" : "btn btn-accent btn-block"}>{buyNow ? 
                    
                    (
                        <div className='flex justify-center items-center gap-10'>
                            <IoMdCheckmark />
                            <h1>Add to Cart</h1>
                        </div>
                    ) : "Buy Now"}</button>
                     
                </div>
            </div>
        </div>
    );
};

export default Card;