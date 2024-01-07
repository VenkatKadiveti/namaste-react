import Loader from "../loader/Loader";
import Menu from "../menuCard/Menu";
import './restroMenu.scss';
import { Link, useParams } from 'react-router-dom';
import useRestaurantMenu from "../../utils/hooks/useRestraurantMenu";
import { useSelector } from "react-redux";
import appConstants from "../../utils/Constants";

const RestroMenu = (props) => {
  const { restaurantId } = useParams();
  const restaurantMenu = useRestaurantMenu(restaurantId);

  const cartItems = useSelector((store) => store.cart.items);
  const cartItemsValue = useSelector((store) => store.cartValue.value);

  
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
                  if(!menu.card.card['@type'].includes('RestaurantLicenseInfo') && !menu.card.card['@type'].includes('RestaurantAddress')){
                    return (
                      <div className="catContainer">
                         <span className="category">{menu?.card?.card?.title} ({menu?.card?.card?.itemCards?.length || menu?.card?.card?.categories?.length})</span> 
                         { menu?.card?.card.itemCards ? <Menu itemList={menu?.card?.card.itemCards} /> : menu?.card?.card?.categories ? menu?.card?.card?.categories.map(item => <Menu itemList={item.itemCards} />) : '' }
                      </div>
                  )} else {
                    return ''
                  }  
                })
            }
          </div>

            <div className="footer">
              <span className="license">
                <img width="44px" src={appConstants.RESTAURANT_IMG_CDN_URL+restaurantMenu.menu[restaurantMenu.menu.length -2].card.card.imageId} />
                <span>{restaurantMenu.menu[restaurantMenu.menu.length -2].card.card.text[0]}</span>
              </span>
              <div className="area" >
                <span>{restaurantMenu.menu[restaurantMenu.menu.length -1].card.card.name}</span>
                <span>(Outlet:{restaurantMenu.menu[restaurantMenu.menu.length -1].card.card.area})</span>
                <span>{restaurantMenu.menu[restaurantMenu.menu.length -1].card.card.completeAddress}</span>
              </div>
            </div>  

          <div className="browseMenu">
            <span>BROWSE MENU</span>
          </div>
          { cartItems.length !== 0 ? (<div className="banner">
            <span>{cartItems.filter(x=> x.count > 0).length} items | ₹ {Math.round(cartItemsValue)}</span>
            <Link className="notLink" to='/cart'><span className="notALink">View cart</span></Link>
        </div>) : ''}

        
        </div>
      )} 
    </div>
  );
};

export default RestroMenu;
