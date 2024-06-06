// import Swiper core and required modules
import { A11y, Pagination } from "swiper/modules";
import "animate.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/a11y";

import "swiper/css/navigation";
import "swiper/css/pagination";

import slider1 from "../../assets/slider/slider1.png";
import slider2 from "../../assets/slider/ricardo-gomez-angel-LsJpi7bH8L4-unsplash.png";
import slider3 from "../../assets/slider/sean-pollock-PhYq704ffdA-unsplash.png";
const Banner = () => {
   return (
      <div className="px-2 md:px-0 mt-10 md:mt-0 md:h-[550px] md:mb-16 mb-8">
         <Swiper
            // install Swiper modules
            modules={[Pagination, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay
            EffectCreative
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
         >
            <SwiperSlide className="md:h-[550px] rounded-xl">
               <img className="w-full md:h-[550px] relative rounded-xl" src={slider1} alt="" />
               <div className="bg-gradient-to-r from-[#0A031B78] to-[#2D154633] h-full absolute top-0 w-full rounded-xl">
                  <div className="md:flex justify-center md:items-center pt-14 md:pt-0 h-[550px]">
                     <div className="text-center ">
                        <h2 className="text-3xl md:text-6xl text-white font-fStyle font-bold animate__animated animate__bounce animate__fast  animate__backInDown">
                           Buy or rent properties <br /> with no commission
                        </h2>
                        <div className="join mt-8">
                           <input className="input input-bordered join-item" placeholder="Search" />
                           <button className="join-item rounded-r-full btn hover:text-black border-red-300 bg-red-300 text-gray-800 ">Search</button>
                        </div>
                     </div>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className="md:h-[550px] rounded-xl">
               <img className="w-full md:h-[550px] relative rounded-xl" src={slider2} alt="" />
               <div className="bg-gradient-to-r from-[#0A031B78] to-[#2D154633] h-full absolute top-0 w-full rounded-xl">
                  <div className="md:flex justify-center md:items-center pt-14 md:pt-0 h-[550px]">
                     <div className="text-center ">
                        <h2 className="text-3xl md:text-6xl text-white font-fStyle font-bold animate__animated animate__bounce animate__fast  animate__backInDown">
                           Buy or rent properties <br /> with no commission
                        </h2>
                        <div className="join mt-8">
                           <input className="input input-bordered join-item" placeholder="Search" />
                           <button className="join-item rounded-r-full btn hover:text-black border-red-300 bg-red-300 text-gray-800 ">Search</button>
                        </div>
                     </div>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className="md:h-[550px] rounded-xl">
               <img className="w-full md:h-[550px] relative rounded-xl" src={slider3} alt="" />
               <div className="bg-gradient-to-r from-[#0A031B78] to-[#2D154633] h-full absolute top-0 w-full rounded-xl">
                  <div className="md:flex justify-center md:items-center pt-14 md:pt-0 h-[550px]">
                     <div className="text-center ">
                        <h2 className="text-3xl md:text-6xl text-white font-fStyle font-bold animate__animated animate__bounce animate__fast  animate__backInDown">
                           Buy or rent properties <br /> with no commission
                        </h2>
                        <div className="join mt-8">
                           <input className="input input-bordered join-item" placeholder="Search" />
                           <button className="join-item rounded-r-full btn hover:text-black border-red-300 bg-red-300 text-gray-800 ">Search</button>
                        </div>
                     </div>
                  </div>
               </div>
            </SwiperSlide>
         </Swiper>
      </div>
   );
};

export default Banner;
