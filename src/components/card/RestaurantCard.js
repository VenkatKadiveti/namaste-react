import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import  appConstants  from '../../utils/Constants';
import UserContext from '../../utils/contexts/UserContext';


const RestaurantCard = (props) => {
    const { resData } = props;
    const {name , cloudinaryImageId, cuisines , avgRating, areaName, sla, id} = resData;
    const { loggedInUser } = useContext(UserContext);

    return (
        <div className='card-container'>
            <Link className='notLink' to={'/details/'+id}>
                <div className='card-logo-container'>
                    <img className='card-logo' src={ appConstants.RESTAURANT_IMG_CDN_URL + cloudinaryImageId}></img>
                </div>
                <div className='details'>
                    <span><b>{name}</b></span>
                    <span className='starRates'> <img width="17" src={require('./star.jpg')} />&nbsp;<b>{avgRating} - {sla.slaString}</b></span>
                    <span className='cuisinex'>{cuisines.join(',')}</span>
                    <span className='areaName'>{areaName}</span>
                    <span className='areaName'>{loggedInUser}</span>
                </div>
            </Link>
        </div>
    )
}

export default RestaurantCard;