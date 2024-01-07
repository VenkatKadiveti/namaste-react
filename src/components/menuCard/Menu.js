import { useState } from "react";
import appConstants from "../../utils/Constants";
import './menu.scss';
import { useDispatch } from "react-redux";
import { addItem, updateItemCount } from "../../utils/Redux/cartSlice";
import { useSelector } from "react-redux";
import { decreaseCartValue, increaseCartValue } from "../../utils/Redux/cartValueSlice";

const Menu = (props) => {
    const [itemsList, setItemList] = useState(props.itemList);
    const dispatcher = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);

    const handleClick = (item) => {
        const isExists = cartItems.findIndex(cartitem => cartitem.card.info.id === item.card.info.id) > -1;
        if(isExists) {
            dispatcher(updateItemCount({id: item.card.info.id, type: 'add'}));
        } else {
            item['count'] = 1;
            dispatcher(addItem(item))
        }
        dispatcher(increaseCartValue(item));
    }

    const increaseCount = (item) => {
        dispatcher(updateItemCount({id: item.card.info.id, type: 'add'}));
        dispatcher(increaseCartValue(item));
    }

    const reduceCount = (item) => {
        dispatcher(updateItemCount({id: item.card.info.id, type: 'remove'}));
        dispatcher(decreaseCartValue(item));
    }

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
                                
                                { cartItems.findIndex(cItem => cItem.card.info.id === item.card.info.id) === -1 ? (<span className="addItem" onClick={() => handleClick(item)} >Add +</span>) : (
                                    <div className="addItemCounter">
                                        <span onClick={() => reduceCount(item)}>-</span>
                                        <span>{cartItems.find(x => x.card.info.id === item.card.info.id).count}</span>
                                        <span onClick={() => increaseCount(item)}>+</span>
                                    </div>
                                ) }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Menu;