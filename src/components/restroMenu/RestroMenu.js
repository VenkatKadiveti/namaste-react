import Loader from "../loader/Loader";
import Menu from "../menuCard/Menu";
import './restroMenu.scss';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from "../../utils/hooks/useRestraurantMenu";

const RestroMenu = (props) => {
  const { restaurantId } = useParams();
  const restaurantMenu = useRestaurantMenu(restaurantId);

  //  ALL THE COMMENTED CODE MOVED INTO ONE FILE AND EXPOSE IT AS A CUSTOM HOOK.
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(API_URLS.BASE_URL + API_URLS.RESTAURANT_MENU, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(getBody()),
  //   });
  //   const responseData = await data.json();
  //   setRestaurantMenu(responseData);
  // };

  // const getBody = () => {
  //   return {
  //     pageType: "REGULAR_MENU",
  //     lat: 12.9351929,
  //     lng: 77.62448069999999,
  //     restaurantId: restaurantId,
  //   };
  // };

  return (
    <div>
      {restaurantMenu === null ? (
        <Loader />
      ) : (
        <div className="menuContainer">
          <div className="restroDetailsSection">
            <div className="textDetails">
                <span className="name">{restaurantMenu?.restaurant?.info?.name}</span>
                <span className="extraDetails">{restaurantMenu?.restaurant?.info?.cuisines?.join(',')}</span>
                <span className="extraDetails">{restaurantMenu?.restaurant?.info?.areaName} {restaurantMenu?.restaurant?.info?.sla?.lastMileTravelString}</span>
                { restaurantMenu?.restaurant?.info?.expectationNotifiers ? <span className="extraDetails address">{restaurantMenu?.restaurant?.info?.expectationNotifiers[0]?.text}</span> : '' }
            </div>
            <div className="ratings">
                <span className="rate"><img width="17" src={require('./star-without-circle.jpg')} /> &nbsp;{restaurantMenu?.restaurant?.info?.avgRatingString}</span>
                <span className="noOfratings">{restaurantMenu?.restaurant?.info?.totalRatingsString}</span>
            </div>
          </div>
          <div className="arrival">
            <span className="time">{restaurantMenu?.restaurant?.info?.sla?.slaString}</span>
            <span className="price">{restaurantMenu?.restaurant?.info?.costForTwoMessage}</span>
          </div>
          { !restaurantMenu?.restaurant?.info?.expectationNotifiers ? (<div className="availability">
            <span>{restaurantMenu?.restaurant?.info?.availabilityServiceabilityMessage}</span>
          </div>) : ''}
          <div className="restroOffers">
            {
               restaurantMenu.offers ? (
                    restaurantMenu['offers'].map(offer => {
                        return (
                            <div className="offerCard">
                                {offer.info.offerTag ? (<span className="typeOfOffer">{offer?.info?.offerTag}</span>) : <span className="noTypeOfOffer">&nbsp;</span>}
                                <div className="offerDetails">
                                    <span>{offer?.info?.header}</span>
                                    <span>{offer?.info?.couponCode} | {offer?.info?.description}</span>
                                </div>
                            </div>
                        )
                    })
                
               ) : 'No oofers' 
            }
          </div>
          <div className="restroItemsSection">
            {
                restaurantMenu.menu.map(menu => {
                    return (
                        <div className="catContainer">
                           <span className="category">{menu?.card?.card?.title} ({menu?.card?.card?.itemCards?.length || menu?.card?.card?.categories?.length})</span> 
                           { menu?.card?.card.itemCards ? <Menu itemList={menu?.card?.card.itemCards} /> : menu?.card?.card?.categories ? menu?.card?.card?.categories.map(item => <Menu itemList={item.itemCards} />) : '' }
                        </div>
                    )
                })
            }
          </div>
          <div className="browseMenu">
            <span>BROWSE MENU</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestroMenu;
