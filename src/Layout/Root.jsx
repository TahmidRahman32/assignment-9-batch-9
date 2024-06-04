import { Outlet } from "react-router-dom";
import Nav from "../pages/Navber/Nav";
import Footer from "../pages/Footer";

const Root = () => {
   return (
      <div>
         <Nav></Nav>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default Root;
