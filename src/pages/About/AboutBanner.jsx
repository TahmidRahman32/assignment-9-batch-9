import BannerImg from "../../assets/about1.jpg";

const AboutBanner = () => {
   
   return (
      <div className="my-8">
         <div className="hero h-[350px] rounded-xl" style={{ backgroundImage: `url(${BannerImg})` }}>
            <div className="hero-overlay bg-opacity-40 rounded-xl"></div>

            <h1 className="mb-5 text-5xl font-bold text-white animate__animated animate__bounce animate__faster  animate__backInDown">About Us</h1>
         </div>
         <div className="flex items-center my-16 gap-16">
            <div className="animate__animated animate__bounce animate__slower animate__backInLeft">
               <img className="w-[1850px] rounded-xl" src="https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/about-us-img1.jpg" alt="" />
            </div>
            <div className="space-y-6 animate__animated animate__bounce animate__slower  animate__backInRight">
               <h1 className="text-3xl font-bold font-fStyle">Modern spaces and premium design</h1>
               <p>
                  Mazim saepe instructior mel ei, sanctus assueverit per at, ad eam veri putent nonumes. Id duo modo quidam maluisset, ut mel tractatos intellegat. Ea electram repudiandae qui. Ea soluta meliore accumsan vel, est veniam populo ea. Mel
                  habeo elitr dissentiunt id, oratio fabulas lobortis te pri.
               </p>
               <button className="text-red  hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-red-300 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-300 before:transition-all before:duration-500 hover:text-white hover:shadow-red-300 hover:before:left-0 hover:before:w-full">
                  <span className="relative z-10">Swipe</span>
               </button>
            </div>
         </div>
      </div>
   );
};

export default AboutBanner;
