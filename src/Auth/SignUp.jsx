import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import { AuthContext } from "../Route/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
   const [showPass, setShowPass] = useState(false);
   const [registerError, setRegisterError] = useState('');
   const [registerMassage, setRegisterMassage] = useState('');
   const { createUsers } = useContext(AuthContext);
   const navigate = useNavigate();
   const handleRegisterPage = (e) => {
      e.preventDefault();
      const form = e.target;
      const username = form.username.value;
      const email = form.email.value;
      const password = form.password.value;
      const photo = form.photo.value;
      console.log(username, email, password, photo);

      if (password.length < 6) {
         toast.error('password must be 6 character')
         return;
      } else if (!/[A-Z]/.test(password)) {
         toast.error("please add one uppercase");
         return;
      }
       else if (!/[a-z]/.test(password)) {
         toast.error("please add one lowercase");
         return;
      }

      createUsers(email, password)
         .then((result) => {
            console.log(result.user);
            setRegisterMassage('User create a successfully');
            updateProfile(result.user, {
               displayName: username,
               photoURL: photo,
            })
            .then(()=>{console.log('name is done');}).catch(()=>{})
            navigate('/')
         })
         .catch((error) => {
            setRegisterError(error.code)
         });
   };
   return (
      <div className="bg-slate-300 md:p-10 rounded-t-xl">
         <Helmet>
            <title>Altair | SignUp</title>
         </Helmet>
         <div className="w-full max-w-xl mx-auto my-20 md:px-12 px-3 py-12 items-center space-y-3 rounded-xl dark:text-gray-800 bg-gray-200 shadow-lg">
            <h1 className="text-3xl font-bold font-fStyle text-center">Register Now!!</h1>
            <form noValidate="" action="" className="space-y-6" onSubmit={handleRegisterPage}>
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
                  <label htmlFor="url" className="block dark:text-gray-600">
                     Photo url
                  </label>
                  <input
                     type="url"
                     name="photo"
                     placeholder="Photo Url"
                     className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 focus:no-underline transition border-2 hover:scale-105  hover:border-red-300 border-opacity-30"
                  />
               </div>
               <div className="space-y-1 text-sm">
                  <label htmlFor="email" className="block dark:text-gray-600">
                     Email
                  </label>
                  <input
                     type="email"
                     name="email"
                     id="email"
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
            <div>
               {registerError && (
                  <div className="text-center">
                     <p className="text-red-600 font-bold font-fStyle">{registerError}</p>
                  </div>
               )}
            </div>
            <div>
               {registerMassage && (
                  <div className="text-center">
                     <p className="text-green-600 text-xl font-bold font-fStyle">{registerMassage}</p>
                  </div>
               )}
            </div>

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
