import React from 'react';
import ReactDOM from 'react-dom/client';

const number = 1000;

const reactElement = <h3>Noraml reacct elemet.</h3>

const TitleComponent =() => <h2>My title.</h2>

const HeadingComponent = () => {
    return (
        <div>
            <h1 id="heading">Hello from Function component.</h1>
            <TitleComponent />
            {reactElement}
            <h5>Number; {number}</h5>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />)