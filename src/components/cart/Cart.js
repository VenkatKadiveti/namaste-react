import { useState } from 'react';
import { useSelector } from 'react-redux';
import appConstants from '../../utils/Constants';
import './cart.scss';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../utils/Redux/cartSlice';
import { Link } from 'react-router-dom';
import { resetValue } from '../../utils/Redux/cartValueSlice';

const Cart = () => {

    const [showBanner, setBannerFlag] = useState(false);
    const cartItems = useSelector((store) => store.cart.items);
    const cartItemsValue = useSelector((store) => store.cartValue.value);
    const dispatch = useDispatch();

    const handleClearall = () => {
        dispatch(clearCart());
        dispatch(resetValue())
    }

    const handlePlaceOrder = () => {
        setBannerFlag(true);
        setTimeout(() => {
            dispatch(clearCart());
            setBannerFlag(false);
            dispatch(resetValue())
        } , 1000)
    }

    if(cartItems.filter(x=>x.count>0).length === 0 && !showBanner) {
        return (
            <div className='emptyCart'>
                <span>
                    <img height='440px' width='675px' src={appConstants.EMPTY_CART_LOGO} />
                </span>
                <Link className='notLink' to='/'><span className='nearRes'>See restaurants near you</span></Link>
            </div>
        )
    }

    return (
        <div className='cartContainer'>
            <div className='cartHead'>
                <span className='cartHeadTitle'>Cart</span>
                <span className='clearCart' onClick={handleClearall}>Clear cart</span>
            </div>
            <div className='itemListContainer'>
                {cartItems.map(item => {
                    return (
                        <div className='itemDetails'>
                            <div className='itemDesc'>
                                <span className='itemName'>{item?.card?.info.name}</span>
                                <span className='itemPrice font-medium text-md pb-2'>₹{(item?.card?.info.price || item?.card?.info.defaultPrice) / 100}</span>
                                <span className='itemText'>{item?.card?.info.description}</span>
                            </div>
                            <div>
                                <img className='itemImage' src={appConstants.RESTAURANT_IMG_CDN_URL+item?.card?.info.imageId} />
                            </div>
                            
                        </div>
                    )
                })}
            </div>
            <div className='placeOrder'>
                <span className='totalPrice'>Total price: ₹ {Math.round(cartItemsValue)}</span>
                <span className='placeOrderBtn' onClick={handlePlaceOrder}>Place order</span>
            </div>
             {
                showBanner ? (
                    <div className='placeOrderbanner'> 
                        <span className='content'>
                            <img width="35px" src="https://st3.depositphotos.com/4429641/37615/v/450/depositphotos_376152850-stock-illustration-check-mark-icons-flat-buttons.jpg" />
                            <span>Your order placed successfully.</span>
                        </span>
                    </div>
                ) : ''
             }
        </div>
    )
}

export default Cart;