import { IoLocationOutline } from "react-icons/io5";

import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Card = ({ card }) => {
   // console.log(card);
   const { image, id, title, area, description, price, status, location } = card;
   return (
      <div className="max-w-lg p-4 shadow-xl rounded-xl focus:no-underline transition border-2 hover:scale-105  hover:border-red-300 border-opacity-30">
         <div className="space-y-4">
            <div className="space-y-2">
               <img src={image} alt="" className="relative block object-cover object-center w-full rounded-md h-72 bg-gray-500" />

               <button className=" absolute -top-64 text-red hover:before:bg-redborder-red-500 relative h-[30px] w-16 overflow-hidden  bg-red-300 px-3 text-black shadow-2xl  transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#eef4f4] before:transition-all before:duration-500 hover:text-black hover:shadow-red-500 hover:before:left-0 hover:before:w-full rounded-e-xl">
                  <span className="relative z-10 font-bold">{status}</span>
               </button>

               <div className="flex items-center gap-3 text-lg flex-grow">
                  <span className=" hover:underline flex items-center gap-1">
                     <IoLocationOutline /> {location}
                  </span>
                  {/* <span className="font-bold hover:underline">#{facilities[1]}</span> */}
               </div>
            </div>
            <div className="space-y-2">
               <a rel="noopener noreferrer" href="#" className="block">
                  <h3 className="text-xl font-semibold text-violet-400">{title}</h3>
               </a>
               <p className="leading-snug text-gray-400">{description}</p>
            </div>
         </div>
         <hr />
         <div className="flex items-center justify-between my-4">
            <div>
               <p className="font-bold">Price: {price}</p>
               <p className="font-bold">Area: {area}</p>
            </div>
            <div>
               <Link to={`cardDetails/${id}`}>
                  <div href="#_" className="relative inline-flex items-center justify-center p-4 px-3 py-1 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-red-300 rounded-full shadow-md group">
                     <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-300 group-hover:translate-x-0 ease">
                        <FaRegArrowAltCircleRight size={20} />
                     </span>
                     <span className="absolute flex items-center justify-center w-full h-full text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease">Details</span>
                     <span className="relative invisible">Details</span>
                  </div>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Card;
