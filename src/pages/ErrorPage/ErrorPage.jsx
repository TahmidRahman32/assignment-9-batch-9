import { Link, useRouteError } from "react-router-dom";
import errorImg from '../../assets/404.gif'
import { FaArrowLeft } from "react-icons/fa6";

const ErrorPage = () => {
   const error = useRouteError();
  
   return (
      <div className="flex justify-center">
         <div>
            <img src={errorImg} alt="" />

            <h3 className="font-bold text-2xl text-center text-red-500">{error.data}</h3>
            <div className="text-center my-5">
               <Link to={"/"} className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
                  <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                     <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white flex items-center gap-1"> <FaArrowLeft /> Go Home</span>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default ErrorPage;