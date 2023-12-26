import { useState } from "react";
import appConstants from "../../utils/Constants";
import './menu.scss';

const Menu = (props) => {
    const [itemsList, setItemList] = useState(props.itemList);

    return (
        <div>
            {
                itemsList.map(item => {
                    return(
                        <div className="itemDetailsContainer">
                            <div className="itemDetails">
                                {item?.card?.info?.isVeg ? <img width='20px' className="itemType" src={appConstants.VEG_ICON} /> : <img width='20px' className="itemType" src={appConstants.NON_VEG_ICON} />}
                                <span className="itemName">{item?.card?.info?.name}</span>
                                <span className="itemPrice">₹{(item?.card?.info?.price || item?.card?.info?.defaultPrice)/100}</span>
                                <span className="itemDescription">{item?.card?.info?.description}</span>
                            </div>
                            <div className="itemImageContainer">
                                { item?.card?.info?.imageId ? <img className="itemImage" src={appConstants.RESTAURANT_IMG_CDN_URL+item?.card?.info?.imageId} /> : <img className="itemImage" src={appConstants.NO_ITEM_IMAGE} /> }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Menu;