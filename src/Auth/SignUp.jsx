import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";

const SignUp = () => {
   const [showPass, setShowPass] = useState(false);
   return (
      <div className="bg-slate-300 p-10 rounded-t-xl">
         <Helmet>
            <title>Altair | LogIn</title>
         </Helmet>
         <div className="w-full max-w-xl mx-auto my-20 px-12 py-12 items-center space-y-3 rounded-xl dark:text-gray-800 bg-gray-200 shadow-lg">
            <h1 className="text-3xl font-bold font-fStyle text-center">Register Now!!</h1>
            <form noValidate="" action="" className="space-y-6">
               <div className="space-y-1 text-sm">
                  <label htmlFor="username" className="block dark:text-gray-600">
                     Username
                  </label>
                  <input
                     type="text"
                     name="username"
                     id="username"
                     placeholder="username"
                     className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 focus:no-underline transition border-2 hover:scale-105  hover:border-red-300 border-opacity-30"
                  />
               </div>
               <div className="space-y-1 text-sm">
                  <label htmlFor="username" className="block dark:text-gray-600">
                     Photo Url
                  </label>
                  <input
                     type="url"
                     name="email"
                     id="username"
                     placeholder="Photo Url"
                     className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 focus:no-underline transition border-2 hover:scale-105  hover:border-red-300 border-opacity-30"
                  />
               </div>
               <div className="space-y-1 text-sm">
                  <label htmlFor="username" className="block dark:text-gray-600">
                     Email
                  </label>
                  <input
                     type="email"
                     name="email"
                     id="username"
                     placeholder="Your Email"
                     className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 focus:no-underline transition border-2 hover:scale-105  hover:border-red-300 border-opacity-30"
                  />
               </div>
               <div className="space-y-1 text-sm relative">
                  <label htmlFor="password" className="block dark:text-gray-600">
                     Password
                  </label>
                  <input
                     type={showPass ? "text" : "password"}
                     name="password"
                     id="password"
                     placeholder="Password"
                     className=" w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 focus:no-underline transition border-2 hover:scale-105  hover:border-red-300 border-opacity-30"
                  />
                  <span className="absolute bottom-3  right-3" onClick={() => setShowPass(!showPass)}>
                     {showPass ? <FaEyeSlash size={20} /> : <IoEyeSharp size={20} />}
                  </span>
               </div>

               <button className="block w-full p-3 text-center rounded-lg dark:text-gray-50 bg-red-400">Sign Up</button>
            </form>

            <p className="text-lg text-center sm:px-6 dark:text-gray-600">
               You have a already account?{" "}
               <Link to={"/logIn"} className="underline  text-blue-600 font-bold">
                  Sign In
               </Link>
            </p>
         </div>
      </div>
   );
};

export default SignUp;
