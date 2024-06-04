import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import About from "../pages/About/About";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";


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
            element: <About/>,
         },
      ]
   },
]);

export default router;