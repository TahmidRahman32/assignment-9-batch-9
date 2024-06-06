import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, Navigate, useLocation } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import { AuthContext } from "../Route/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { TfiTwitterAlt } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa6";
const Login = () => {
   const [showPass, setShowPass] = useState(false);
   const [logError, setLogError] = useState("");
   const [loginMassage, setLoginMassage] = useState("");
   const { logIn, googleLogin, githubLogin } = useContext(AuthContext);
   const location = useLocation();

   const handleLoginPage = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;

      logIn(email, password)
         .then((result) => {
            console.log(result.user);
            setLoginMassage("Login successfully");
            Navigate(location?.state ? location?.state : "/");
         })
         .catch((error) => {
            // console.log(error.massage);
            setLogError(error.code);
         });
   };

   const handleGoogleBtn = () => {
      googleLogin()
         .then((result) => {
            console.log(result.user);
            Navigate(location?.state ? location?.state : "/");
            console.log(location.state);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const handleGithubBtn = () => {
      githubLogin()
         .then((result) => {
            console.log(result.user);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   return (
      <div className="bg-slate-300 md:p-10 rounded-t-xl">
         <Helmet>
            <title>Altair-LogIn</title>
         </Helmet>
         <div className="w-full max-w-xl mx-auto my-20 md:px-12 px-2 md:py-12 py-4 items-center space-y-3 rounded-xl dark:text-gray-800 bg-gray-200 shadow-lg">
            <h1 className="text-3xl font-bold font-fStyle text-center">Login Now!!</h1>
            <form noValidate="" action="" className="space-y-6" onSubmit={handleLoginPage}>
               <div className="space-y-1 text-sm">
                  <label htmlFor="username" className="block dark:text-gray-600">
                     Email
                  </label>
                  <input
                     type="text"
                     name="email"
                     id="username"
                     placeholder="Your Email"
                     className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 focus:no-underline transition border-2 hover:scale-105  hover:border-red-300 border-opacity-30"
                  />
               </div>
               <div className="space-y-1 text-sm relative ">
                  <label htmlFor="password" className="block dark:text-gray-600">
                     Password
                  </label>
                  <input
                     type={showPass ? "text" : "password"}
                     name="password"
                     id="password"
                     placeholder="Password"
                     className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 focus:no-underline transition border-2 hover:scale-105  hover:border-red-300 border-opacity-30"
                  />

                  <span className="absolute bottom-8  right-3" onClick={() => setShowPass(!showPass)}>
                     {showPass ? <FaEyeSlash size={20} /> : <IoEyeSharp size={20} />}
                  </span>

                  <div className="flex justify-end text-xs dark:text-gray-600">
                     <a rel="noopener noreferrer" href="#">
                        Forgot Password?
                     </a>
                  </div>
               </div>
               <button className="block w-full p-3 text-center rounded-lg dark:text-gray-50 bg-red-400">Log In</button>
            </form>
            <div>
               {logError && (
                  <div className="text-center">
                     <p className="text-red-600 font-bold font-fStyle">Please Check Your password</p> <p>{logError}</p>
                  </div>
               )}
            </div>
            <div>
               {loginMassage && (
                  <div className="text-center">
                     <p className="text-green-600 text-xl font-bold font-fStyle">{loginMassage}</p>
                  </div>
               )}
            </div>
            <div className="flex items-center pt-4 space-x-1">
               <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
               <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
               <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
            </div>
            <div className="flex justify-center space-x-4">
               <button aria-label="Log in with Google" className="p-3 rounded-sm">
                  <FcGoogle size={25} onClick={handleGoogleBtn} />
               </button>
               <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
                  <TfiTwitterAlt size={25} className="text-blue-500" />
               </button>
               <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
                  <FaGithub size={25} onClick={handleGithubBtn} />
               </button>
            </div>
            <p className="text-lg text-center sm:px-6 dark:text-gray-600">
               Don't have an account?
               <Link to={"/signUp"} className="underline  text-blue-600 font-bold">
                  Sign up
               </Link>
            </p>
         </div>
      </div>
   );
};

export default Login;
