# Namaste-react
Namaste react course learning tutorial


# Types of exports
1. Default export.
2. Named export.

# Default export

`export default SOME_NAME`

Import should be like this

`import SOME_NAME from FILE_PATH`


# Named export

`export SOME_NAME`

Import should be like this

`import {SOME_NAME} from FILE_PATH`


# UseEffect
 - If there is no dependencey array then useEffect will call for every render of the component.
 - If the denpendency array is empty [] then useEffect will call only once when component is loaded for the first time.
 - if the dependencey array have some variables like [var1, var2..., varn] then useEffect will called when wny on the variables updated.
 - if the useEffect method have return statement then that will act as a componentWillUnmount life cycle hook. and It will call once u leave the current page.

 # useRouterError
    - this hook is provided by react-router-dom and it will give us the error occured during the routung.
    - it helps to display the proper error message came during hte routing.

# Routing
    - For routing in react we are using  createBrowserRouter, RouterProvider, Outlet
    # createBrowserRouter
        - With this we have to provide the router config.
        - Router config is an array of json objects. Which contain `path`, `element`, `children` and `errorElement`;
    # RouterProvider
        - For this we have to provide the above routerConfig object `<RouterProvider routes={createBrowserRouter}` />.
    # outlet
        - THis is used to render the router elements in particular section in the web page. like this `<Outlet />`    

# 2 types of routing
    - client side routing
    - server side routing.        

# Class based components life cycle methods

![alt text](https://i0.wp.com/programmingwithmosh.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-31-at-1.44.28-PM.png?ssl=1)

# Single responcebility princeple

