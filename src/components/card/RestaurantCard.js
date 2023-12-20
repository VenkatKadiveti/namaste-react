import React from 'react';
import  appConstants  from '../../utils/Constants';

const RestaurantCard = (props) => {
    const { resData } = props;
    const {name , cloudinaryImageId, cuisines , avgRating, deliveryTime, costForTwo} = resData;
    return (
        <div className='card-container'>
            <div className='card-logo-container'>
                <img className='card-logo' src={ appConstants.RESTAURANT_IMG_CDN_URL + cloudinaryImageId}></img>
            </div>
            <div className='details'>
                <span>{name}</span>
                <span>{cuisines.join(',')}</span>
                <span>{avgRating} stars</span>
                <span>₹{costForTwo / 100} FOR TWO</span>
                <span>{deliveryTime} minutes</span>  
            </div>
        </div>
    )
}

export default RestaurantCard;