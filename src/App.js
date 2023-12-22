import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './components/body/Body';
import Header from './components/header/Header';
  
const AppLayout = () => {

    const moToTop = () => {
        window.scrollTo(0,0)
    } 

    return (<div className='app'>
        <Header />
        <Body />
        <div onClick={moToTop} className='moveTOTop'>
           <span className='iconTop'>^</span>
        </div>
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)