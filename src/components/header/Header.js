import React from 'react';
import  appConstants  from '../../utils/Constants';

const Header = ({props}) => {
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
                </ul>
            </div>
        </div>
    )
}

export default Header;