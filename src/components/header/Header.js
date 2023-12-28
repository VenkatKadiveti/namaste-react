import React, { useState } from 'react';
import  appConstants  from '../../utils/Constants';
import { Link } from 'react-router-dom'
import useOnlineStatus from '../../utils/hooks/useOnlineStatus';

const Header = ({props}) => {

    const [btnName, setBtnName] = useState('Login');
    const onlineStatus = useOnlineStatus();

    const handleLoginBtn = () => {
        if(btnName === 'Login') {
            setBtnName('Logout')
        } else {
            setBtnName('Login')
        }
    }


    return (
        <div className='header-container flex flex-row w-full items-center justify-between shadow-xl border-solid border-slate-100'>
            <Link to='/'>
                <div className='logo-container'>
                    <img className='logo w-40' src={appConstants.APP_LOGO_URL}></img>
                </div>
            </Link>
            <div className='navItems-container pr-8'>
                <ul className="navItems flex flex-row items-center justify-between">
                    <li className='onlineStatus'>{onlineStatus ? <img width='20px' src={appConstants.ONLINE_STATUS} /> : <img width='20px' src={appConstants.OFFLINE_STATUS} />}</li>
                    <li className='navItem text-xl cursor-pointer p-3'><Link to='/'>Home</Link></li>
                    <li className='navItem text-xl cursor-pointer p-3'><Link to='/about'>About Me</Link></li>
                    <li className='navItem text-xl cursor-pointer p-3'><Link to='/contact-us'>Contact Me</Link></li>
                    <li className='navItem text-xl cursor-pointer p-3'><Link to='/'>Cart</Link></li>
                    <li className='navItem text-xl cursor-pointer p-3' onClick={handleLoginBtn}>{btnName}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;