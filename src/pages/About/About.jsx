import { Helmet } from "react-helmet-async";
import AboutBanner from "./AboutBanner";
import { useLoaderData } from "react-router-dom";

import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
const About = () => {
   const authorData = useLoaderData();
   console.log(authorData[0].description);

   return (
      <div>
         <Helmet>
            <title>Altair-about</title>
         </Helmet>
         <AboutBanner></AboutBanner>

         <div className="mt-16">
            <div className="text-center my-16">
               <h1 className="text-4xl font-fStyle font-bold">our real estate agent</h1>
            </div>
            <Marquee pauseOnHover speed={180}>
               <div className="w-[550px] border px-3 py-2 rounded-lg">
                  <div className="flex text-amber-500">
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaRegStarHalfStroke />
                  </div>
                  <h1>{authorData[0].description.slice(0, 400)}</h1>
                  <hr />
                  <div className="flex items-center gap-4 mt-4">
                     <img className="w-16 h-16 rounded-full" src={authorData[0].img} alt="" />
                     <div>
                        <h3 className="font-bold text-xl font-fStyle">{authorData[0].author}</h3>
                        <h3 className="font-fStyle">{authorData[0].author_profession}</h3>
                     </div>
                  </div>
               </div>
               <div className="w-[550px] border px-3 py-2 rounded-lg mx-[550px]">
                  <div className="flex text-amber-500">
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaRegStarHalfStroke />
                  </div>
                  <h1>{authorData[1].description.slice(0, 400)}</h1>
                  <hr />
                  <div className="flex items-center gap-4 mt-4 ">
                     <img className="w-16 h-16 rounded-full" src={authorData[1].img} alt="" />
                     <div>
                        <h3 className="font-bold text-xl font-fStyle">{authorData[1].author}</h3>
                        <h3 className="font-fStyle">{authorData[1].author_profession}</h3>
                     </div>
                  </div>
               </div>
               <div className="w-[550px] border px-3 py-2 rounded-lg mx-[550px]">
                  <div className="flex text-amber-500">
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaRegStarHalfStroke />
                  </div>
                  <h1>{authorData[2].description.slice(0, 400)}</h1>
                  <hr />
                  <div className="flex items-center gap-4 mt-4 ">
                     <img className="w-16 h-16 rounded-full" src={authorData[2].img} alt="" />
                     <div>
                        <h3 className="font-bold text-xl font-fStyle">{authorData[2].author}</h3>
                        <h3 className="font-fStyle">{authorData[2].author_profession}</h3>
                     </div>
                  </div>
               </div>
               <div className="w-[550px] border px-3 py-2 rounded-lg mx-[550px]">
                  <div className="flex text-amber-500">
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaRegStarHalfStroke />
                  </div>
                  <h1>{authorData[3].description.slice(0, 400)}</h1>
                  <hr />
                  <div className="flex items-center gap-4 mt-4 ">
                     <img className="w-16 h-16 rounded-full" src={authorData[3].img} alt="" />
                     <div>
                        <h3 className="font-bold text-xl font-fStyle">{authorData[3].author}</h3>
                        <h3 className="font-fStyle">{authorData[3].author_profession}</h3>
                     </div>
                  </div>
               </div>
               <div className="w-[550px] border px-3 py-2 rounded-lg mx-[550px]">
                  <div className="flex text-amber-500">
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaRegStarHalfStroke />
                  </div>
                  <h1>{authorData[4].description.slice(0, 400)}</h1>
                  <hr />
                  <div className="flex items-center gap-4 mt-4 ">
                     <img className="w-16 h-16 rounded-full" src={authorData[4].img} alt="" />
                     <div>
                        <h3 className="font-bold text-xl font-fStyle">{authorData[4].author}</h3>
                        <h3 className="font-fStyle">{authorData[4].author_profession}</h3>
                     </div>
                  </div>
               </div>
               <div className="w-[550px] border px-3 py-2 rounded-lg mx-[550px]">
                  <div className="flex text-amber-500">
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaRegStarHalfStroke />
                  </div>
                  <h1>{authorData[5].description.slice(0, 400)}</h1>
                  <hr />
                  <div className="flex items-center gap-4 mt-4 ">
                     <img className="w-16 h-16 rounded-full" src={authorData[5].img} alt="" />
                     <div>
                        <h3 className="font-bold text-xl font-fStyle">{authorData[5].author}</h3>
                        <h3 className="font-fStyle">{authorData[5].author_profession}</h3>
                     </div>
                  </div>
               </div>
            </Marquee>
         </div>
      </div>
   );
};

export default About;
