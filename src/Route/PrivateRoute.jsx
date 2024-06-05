import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";
import { HashLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
   const { user,loading } = useContext(AuthContext);
   if(loading){
      return (
         <div className="flex justify-center items-center h-screen">
            <HashLoader color="#36d7b7" size={60} />
         </div>
      );
   }

   if (user) {
      return children;
   }
   return <Navigate to={"/logIn"}></Navigate>;
};

export default PrivateRoute;
