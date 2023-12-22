import React from 'react';
import './loader.scss';

const Loader = () => {
    return (
        <div className='loader-container'>

        {Array(15)
        .fill("")
        .map((e, index) => (
            <div className='loader-card'>
                <div className='img'></div>
                <div className='details-con'>
                    <span className='content-placeholder'></span>
                    <span className='content-placeholder'></span>
                    <span className='content-placeholder'></span>
                    <span className='content-placeholder'></span>
                    <span className='content-placeholder'></span>
                </div>
        </div>
        ))}
        </div>
    )
}

export default Loader;