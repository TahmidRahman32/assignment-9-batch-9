import { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

const Nav = () => {
   const [theme, setTheme] = useState("light");

   const navLinks = (
      <>
         <div className=" flex  gap-4 lg:items-center">
            <NavLink to={"/"} className={({ isActive }) => (isActive ? "text-primary underline font-bold md:text-xl  " : "font-bold ")}>
               Home
            </NavLink>
            <NavLink to={"/about"} className={({ isActive }) => (isActive ? "text-primary underline font-bold md:text-xl" : "font-bold md:text-xl")}>
               about
            </NavLink>
         </div>
      </>
   );

   const handleThemeBtn = (e) => {
      if (e.target.checked) {
         setTheme("dark");
      } else {
         setTheme("light");
      }
   };

   useEffect(() => {
      localStorage.setItem("theme", theme);
      const localTheme = localStorage.getItem("theme");
      document.querySelector("html").setAttribute("data-theme", localTheme);
   }, [theme]);
   return (
      <div className="navbar bg-base-100 shadow-y">
         
         <div className="navbar-start">
            <div className="dropdown">
               <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
               </div>
               <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  {navLinks}
               </ul>
            </div>
            
            <img className={ theme === 'dark' ? " w-20 py-0 my-0 bg-white rounded-xl": 'w-20'} src="https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/client-7.png" alt="" />
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
         </div>
         <div className="navbar-end">
            <label className="cursor-pointer grid place-items-center">
               <input onChange={handleThemeBtn} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
               <svg
                  className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
               >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
               </svg>
               <svg
                  className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
               >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
               </svg>
            </label>
            <a className="btn">Button</a>
         </div>
      </div>
   );
};

export default Nav;
