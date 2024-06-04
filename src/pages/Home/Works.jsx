import { AiOutlineHome } from "react-icons/ai";
import { FcHome } from "react-icons/fc";
import { GrDocumentText } from "react-icons/gr";
import { GiKeyring } from "react-icons/gi";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { FaFilePen } from "react-icons/fa6";
import img from '../../assets/img1.jpg'
import { GrClearOption } from "react-icons/gr";
const Works = ({ Works }) => {
   console.log();
   return (
      <div>
         <div className="my-12">
            <h2 className="text-4xl text-center font-fStyle font-semibold">
               {" "}
               <span className="text-red-300">How It works?</span> <br /> Find a <span className="font-extrabold">perfect home</span>
            </h2>
         </div>
         <div className="flex gap-8 justify-around">
            <div className="space-y-2 my-8 bg-gray-50 px-5 py-4 rounded-lg ">
               <AiOutlineHome size={50} />
               <h3 className="text-2xl font-fStyle font-bold">Find real estate</h3>
               <p className="text-sm">Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco quod suavitate vix.</p>
            </div>
            <div className="space-y-2 my-8 bg-gray-50 px-5 py-4 rounded-lg ">
               <FcHome size={50} />
               <h3 className="text-2xl font-fStyle font-bold">Meet relator</h3>
               <p className="text-sm">Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco quod suavitate vix.</p>
            </div>
            <div className="space-y-2 my-8 bg-gray-50 px-5 py-4 rounded-lg ">
               <GrDocumentText size={50} />
               <h3 className="text-2xl font-fStyle font-bold">Documents</h3>
               <p className="text-sm">Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco quod suavitate vix.</p>
            </div>
            <div className="space-y-2 my-8 bg-gray-50 px-5 py-4 rounded-lg ">
               <GiKeyring size={50} />
               <h3 className="text-2xl font-fStyle font-bold">Take the keys</h3>
               <p className="text-sm">Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco quod suavitate vix.</p>
            </div>
         </div>
         <div className="flex gap-16 my-16 ">
            <div className=" space-y-6">
               <div>
                  {" "}
                  <h2 className="text-4xl font-fStyle">
                     Our expert will help you make <span className="font-bold"> the renovation</span>
                  </h2>
               </div>
               <div className="flex gap-2 items-center ">
                  <HiOutlineHomeModern size={50} />
                  <div>
                     <h2 className="text-2xl font-bold font-fStyle">Find inspiration</h2>
                     <p>
                        Sumo petentium ut per, at his wisim utinam adipis <br /> cing. Est e graeco quod suavitate vix ad praesent.
                     </p>
                  </div>
               </div>
               <div className="flex gap-2 items-center ">
                  <FaFilePen size={50} />
                  <div>
                     <h2 className="text-2xl font-bold font-fStyle">Find architect/designer</h2>
                     <p>
                        Sumo petentium ut per, at his wisim utinam adipis <br /> cing. Est e graeco quod suavitate vix ad praesent.
                     </p>
                  </div>
               </div>
               <div className="flex gap-2 items-center ">
                  <GrClearOption size={50} />
                  <div>
                     <h2 className="text-2xl font-bold font-fStyle">Begin renovation</h2>
                     <p>
                        Sumo petentium ut per, at his wisim utinam adipis <br /> cing. Est e graeco quod suavitate vix ad praesent.
                     </p>
                  </div>
               </div>
            </div>
            <div className="flex gap-2 items-center">
               <div>
                  <img className="h-[450px] w-[400px] rounded-lg" src={img} alt="" />
               </div>
               <div>
                  <img className=" mb-2 rounded-lg" src={Works[1].image} alt="" />
                  <img className=" rounded-lg" src={Works[3].image} alt="" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Works;
