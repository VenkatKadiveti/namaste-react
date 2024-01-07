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

# custome hooks

# tail wind css

# Higher order component

- a function which take a component as a input and enhances the component and returns a component.

# Controlled Component

- a component which doesn't have it own state then it is ca controlled and controlled by it parent which means we are controlling the component from it's parent by passing some props.

# Uncontrolled component

- A component which has it own state then it is uncontroled component.

# lifting the state up

# Props drilling

- pass the props to inner most child. But this approch is not recomended if you have nested children.
  ![alt text](https://miro.medium.com/v2/resize:fit:982/1*4bxAkSA4oHcSAeAzzcJPHA.png)

# React context

    - How to use the context in react

- Create a context `CreateContext` from react and export it.
- In other components use can use it By useing the `useContext` hook;
  - Example
  - import UserContext from './utils/contexts/UserContext.js
  - const userContext = useContext(UserContext);
  - userContext have all the data init.
- if you want to use the context in class based component. You have to import the context first and using consummer

  - Example
  - import UserContext from './utils/contexts/UserContext.js
  - <UserContext.Consummer>
  - {(data) => { data variable have the context data inti } }
  - </UserContext.Consummer>

- How to update the context data.
  - We can update the userContext by using Context provider
    - Example
    - import UserContext from './utils/contexts/UserContext.js
    - <UserContext.Provider value={context data what ever you eant to pass}>
    -  some component present inside the contest and this components will recevie the context data.
    - </UserContext.Provider>


# Redux Toolkit

- Install @reduxjs/toolkit and react-redux;
- Build a store
- connect the store to app
- creat a cark slice;
- dispatch action
- reducer
- Selector

![alt text](https://cdn.hashnode.com/res/hashnode/image/upload/v1680356788829/df86caab-52e3-4c28-84d4-c1c977c07f7d.png?auto=compress,format&format=webp)