import React from 'react';
import ReactDOM from 'react-dom/client';

const h1Ele = React.createElement('h1',
    {
        className: 'helloWorld',
        id: 'headeing',
        name: 'heading'
    },
    'Hello world from React!'
);

const rootEle = ReactDOM.createRoot(document.getElementById('root'));

// rootEle.render(h1Ele);

const parent = React.createElement(
    'div',
    { id: 'parent' },
    React.createElement(
        'div',
        { id: 'child' },
        [
            React.createElement(
                'h1',
                { id: 'h1' },
                'Heading'),
            React.createElement(
                'h2',
                { id: 'h2' },
                'Sub-Heading ffffff')
        ]
    )
)

rootEle.render(parent)