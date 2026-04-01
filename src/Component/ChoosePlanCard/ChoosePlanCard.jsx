import React from 'react';
import ChooseFeatureCard from '../ChooseFeatureCard/ChooseFeatureCard';

const ChoosePlanCard = ({data}) => {
    console.log(data);


    const features = data.features;

    return (
        <div className={`card shadow-lg relative ${
            data.tagType === "popular" ? "bg-accent" : "bg-base-100"
        }`}>

            {
                data.tagType === "popular" ?
                (
                    <span className="badge badge-xs badge-warning absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">{data.tag}</span>
                ) : null
            }
            

            <div className="card-body">
                
                <div className='flex justify-between'>
                    <img className='h-10 w-10 object-contain' src={data.icon} alt="" />
                    
                </div>

                <h1 className='text-3xl font-bold'>{data.name}</h1>
                <p>{data.description}</p>
                <h1 className='text-2xl font-bold'>$ {data.price} / {data.period}</h1>

                <ul className="mt-6 flex flex-col gap-2 text-xs">

                    {
                        features.map((feature, ind) => <ChooseFeatureCard key={ind} feature={feature} />)
                    }


                </ul>
                <div className="mt-6">
                    <button className={`${
                        data.tagType === "popular" ? 'btn' : 'btn btn-accent'
                    } w-full`}>
                        {
                            data.tagType === 'new' && 'Get Started Free'
                        }
                        {
                            data.tagType === 'popular' && 'Start Pro Trial'
                        }
                        {
                            data.tagType === 'best seller' && 'Contact sales'
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChoosePlanCard;