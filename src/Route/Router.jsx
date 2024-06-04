import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


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
         }
      ]
   },
]);

export default router;