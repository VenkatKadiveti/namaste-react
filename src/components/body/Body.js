import React from 'react';
import RestaurantCard from '../card/RestaurantCard';
import RestaurantData from '../../utils/Restorents';

const Body = () => {
    return (
        <div className='restro-container'>
        <div className='search'>
            Search
        </div>
        <div className='restroCard'>
            {RestaurantData.map((resObj, index) =>  <RestaurantCard resData={resObj.data} key={resObj.data.id} />)}
           
            {/* <RestroCard name="Magana Foods" cuisine="Biryani, Andhra, South Indian, North Indian, Chinese, Seafood." stars="4.4" ETA="30 minutes"  />
            <RestroCard name="KFC" cuisine="Burgers, Biryani, American, Snacks, Fast Food" stars="4.3" ETA="40 minutes" /> */}
        </div>
    </div>
    )
}

export default Body;