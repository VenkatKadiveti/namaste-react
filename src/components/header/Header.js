import React, { useState, useContext } from 'react';
import  appConstants  from '../../utils/Constants';
import { Link } from 'react-router-dom'
import useOnlineStatus from '../../utils/hooks/useOnlineStatus';
import UserContext from '../../utils/contexts/UserContext';
import { useSelector } from 'react-redux';

const Header = ({props}) => {

    const [btnName, setBtnName] = useState('Login');
    const onlineStatus = useOnlineStatus();
    const { loggedInUser, setUserName } = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items)
    
    const handleLoginBtn = () => {
        if(btnName === 'Login') {
            setBtnName('Logout');
            setUserName('Venkat')
        } else {
            setBtnName('Login')
            setUserName('Default User')
        }
    }

    return (
        <div className='header-container'>
            <Link to='/'>
                <div className='logo-container'>
                    <img className='logo' src={appConstants.APP_LOGO_URL}></img>
                </div>
            </Link>
            <div className='navItems-container'>
                <ul className="navItems">
                    <li className='onlineStatus'>{onlineStatus ? <img width='20px' src={appConstants.ONLINE_STATUS} /> : <img width='20px' src={appConstants.OFFLINE_STATUS} />}</li>
                    <li className='navItem'><Link to='/'>Home</Link></li>
                    <li className='navItem'><Link to='/about'>About Me</Link></li>
                    <li className='navItem'><Link to='/contact-us'>Contact Me</Link></li>
                    <li className='navItem'><Link to='/cart'>Cart ({cartItems.filter(x=>x.count>0).length}) </Link></li>
                    <li className='navItem' onClick={handleLoginBtn}>{btnName}</li>
                    <li className='navItem'>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;