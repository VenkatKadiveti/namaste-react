import React, { useState, useEffect } from 'react';
import RestaurantCard from '../card/RestaurantCard';
import API_URLS from '../../utils/apiUrls';
import Loader from '../loader/Loader';
import './body.scss';
import useOnlineStatus from '../../utils/hooks/useOnlineStatus';

const Body = () => {

    const [ restroList , setRestroList ] = useState([]);
    const [ searchString , setSearchString ] = useState('');
    const [ nextPage, setNextPage ] = useState(null);
    const [ showMoreFlag, setShowMore ] = useState(false);
    const onlineStatus = useOnlineStatus()

    useEffect(() => {
       setTimeout(() => {
        fetchData(); 
       }, 100);
    }, []);

    const fetchData = async (nextSet) => {
        const url = nextSet ? API_URLS.BASE_URL+API_URLS.RESTAURANT_LIST+`/${nextSet}` : API_URLS.BASE_URL+API_URLS.RESTAURANT_LIST;
        const resData = await fetch(url);
        const json = await resData.json();
        setNextPage(json.nextChunk)
        setRestroList((prev) => prev.concat(json.data))
        setShowMore(false);
    }

    const filterTopRated = () => {
       const topRatedRestros = restroList.filter(restro => restro.info.avgRating >= 4);
       setRestroList(topRatedRestros)
    }

    const handleSearch = ($event) => {
        const searchText = $event.target.value;
        if($event.key === 'Enter' && searchText) {
            const searchVal = searchText.toLowerCase();
            const searchResults = restroList.filter(resObj => resObj?.info?.name?.toLowerCase()?.includes(searchVal));
            setRestroList(searchResults);
        }else if(!searchText) {
            setShowMore(true);
            fetchData();
        }
        setSearchString(searchText);
    }

    const showMore = () => {
        setShowMore(true);
        fetchData(nextPage)
    }

    if(!onlineStatus) {
        return (
        <div className='offlineContainer'>
            <h3>Ooops, Something went wrong. </h3>
            <h5>Check you internet connection once and try again.</h5>
        </div>)
    }

    return (
        <div className='restro-container'>
            <div className='search'>
                <div className='search-box'>
                    <input className='search-input' type="text" placeholder='Type here and click enter...' onKeyUp={handleSearch}/>
                </div>
                <button className='filter-btn' onClick={filterTopRated}>Top rated restaurants</button>
            </div>
            <div className='restroCard'>
                {(searchString && restroList.length === 0) ? (<div className='noData'>No Restorents Found with the name&nbsp;<b>{searchString}</b>.</div>)  : restroList.length !== 0 ? restroList?.map((resObj, index) =>  <RestaurantCard resData={resObj.info} key={resObj.info.id} />) : <Loader />}
            </div>
            {showMoreFlag ? <Loader /> : ''}

            { restroList.length != 0 ? (<div className='showmore'>
                <span onClick={showMore} className='showmore-btn'>Show more</span>
            </div>) : <span></span>
            }
        </div>
    )
}

export default Body;