import { Helmet } from "react-helmet-async";
import AboutBanner from "./AboutBanner";
import { useLoaderData } from "react-router-dom";

import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
const About = () => {
   const  authorData = useLoaderData();
   console.log(authorData[0].description);
   

   return (
      <div>
         <Helmet>
            <title>Altair || about</title>
         </Helmet>
         <AboutBanner></AboutBanner>

         <div className="my-16">
            <div className="text-center my-8">
               <h1 className="text-4xl font-fStyle font-bold">our real estate agent</h1>
            </div>
            <Marquee pauseOnHover speed={150}>
               <div className="w-[650px] border px-3 py-2 rounded-lg">
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
               <div className="w-[650px] border px-3 py-2 rounded-lg mx-[1250px]">
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
            </Marquee>
         </div>
      </div>
   );
};

export default About;
