import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import About from "../pages/About/About";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import PrivateRoute from "./PrivateRoute";
import Details from "../pages/Home/Details";


const router = createBrowserRouter([
   {
      path: "/",
      element: <Root /> ,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
         {
            path: '/',
            element: <Home />,
            loader: ()=> fetch('fakeData.json')
         },
         {
            path: '/logIn',
            element: <Login/>,
         },
         {
            path: '/signUp',
            element: <SignUp/>,
         },
         {
            path: '/about',
            element: <PrivateRoute><About/></PrivateRoute> ,
         },
         {
            path: '/details/:id',
            element: <PrivateRoute><Details></Details></PrivateRoute>,
            loader: () => fetch('fakeData.json')
         }
      ]
   },
]);

export default router;