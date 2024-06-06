import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
   const { user,loading } = useContext(AuthContext);

   const location = useLocation();
   console.log(location.pathname);
   if(loading){
      return (
         <div className="flex justify-center items-center min-h-[calc(100vh-360px)]">
            <HashLoader color="#E56B6B" size={80} />
         </div>
      );
   }

   if (user) {
      return children;
   }
   return <Navigate state={location.pathname} to={"/logIn"} ></Navigate>;
};

export default PrivateRoute;
