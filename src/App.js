import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/body/Body";
import Header from "./components/header/Header";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
// import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Error from "./components/error/Error";
import RestroMenu from "./components/restroMenu/RestroMenu";
import Loader from "./components/loader/Loader";
import UserContext from "./utils/contexts/UserContext";

import { Provider, useSelector } from "react-redux";
import appStore from "./utils/Redux/appStore";
import Cart from "./components/cart/Cart";

const About = lazy(() => import('./components/about/About'))
const AppLayout = () => {
  const moToTop = () => {
    window.scrollTo(0, 0);
  };

  const [userName, setUserName] = useState('Default user');


  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
      <div className="app">
        <Header />
        <Outlet />
        <div onClick={moToTop} className="moveTOTop">
          <span className="iconTop">^</span>
        </div>
      </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouterConfig = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children:[
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <Suspense fallback={<Loader />}><About /></Suspense>
            },
            {
                path: '/contact-us',
                element: <Contact />
            },
            {
                path: '/details/:restaurantId',
                element: <RestroMenu />
            },
            {
              path: '/cart',
              element: <Cart />
            }
        ],
        errorElement: <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouterConfig} />);
