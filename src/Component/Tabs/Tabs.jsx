import React from 'react';

const Tabs = ({activeTab, setActiveTab, showCarts}) => {

    const handleProductTab = () => {
        setActiveTab("products");
    }

    const handleCartTab = () => {
        setActiveTab("carts");
    }

    return (
        <div className='container mx-auto space-y-10'>
            <div className='text-center space-y-5 mt-15'>
                <h1 className='text-3xl font-bold'>Premium Digital Tools</h1>
                <p>Choose from our curated collection of premium digital products for boost your productivity and creativity.</p>
            </div>
            
            <div className="tabs tabs-box justify-center mb-15 bg-transparent gap-5">

                <input onClick={handleProductTab} type="radio" name="my_tabs_1" className={`tab rounded-4xl w-40 ${activeTab === "products" ? 'bg-accent' : 'bg-gray-100'}`} aria-label="Products" defaultChecked />

                <input onClick={handleCartTab} type="radio" name="my_tabs_1" className={`tab rounded-4xl w-40 ${activeTab === "carts" ? 'bg-accent' : 'bg-gray-100'}`} aria-label={`Cart (${showCarts.length})`}  />
                
            </div>

        </div>
    );
};

export default Tabs;