import React from 'react';
import  appConstants  from '../../utils/Constants';

const RestaurantCard = (props) => {
    const { resData } = props;
    const {name , cloudinaryImageId, cuisines , avgRating, areaName, sla} = resData;
    return (
        <div className='card-container'>
            <div className='card-logo-container'>
                <img className='card-logo' src={ appConstants.RESTAURANT_IMG_CDN_URL + cloudinaryImageId}></img>
            </div>
            <div className='details'>
                <span><b>{name}</b></span>
                <span className='starRates'> <img width="17" src={require('./star.jpg')} />&nbsp;<b>{avgRating} :{sla.slaString}</b></span>
                <span className='cuisinex'>{cuisines.join(',')}</span>
                <span>{areaName}</span>
            </div>
        </div>
    )
}

export default RestaurantCard;