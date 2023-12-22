import React, { useState } from 'react';
import  appConstants  from '../../utils/Constants';

const Header = ({props}) => {

    const [btnName, setBtnName] = useState('Login');

    const handleLoginBtn = () => {
        if(btnName === 'Login') {
            setBtnName('Logout')
        } else {
            setBtnName('Login')
        }
    }

    return (
        <div className='header-container'>
            <div className='logo-container'>
                <img className='logo' src={appConstants.APP_LOGO_URL}></img>
            </div>
            <div className='navItems-container'>
                <ul className="navItems">
                    <li className='navItem'>Home</li>
                    <li className='navItem'>About Us</li>
                    <li className='navItem'>Contact Us</li>
                    <li className='navItem'>Cart</li>
                    <li className='navItem' onClick={handleLoginBtn}>{btnName}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;