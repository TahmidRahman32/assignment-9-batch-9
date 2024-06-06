import { Helmet } from "react-helmet-async";


const OrderCard = ({order}) => {
   console.log(order);
   const { image, name, title, status, description, price, area } = order;
   return (
      <div>
         <Helmet>
            <title>Altair-OrderList</title>
         </Helmet>
         <div className="p-3 sm:p-5 max-w-4xl mx-auto my-8 dark:bg-gray-50 dark:text-gray-800">
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
               <img src={image} alt="" className="self-center flex-shrink-0 w-28 h-28 border rounded-lg  md:justify-self-start dark:bg-gray-500 dark:border-gray-300" />
               <div className="flex flex-col">
                  <h4 className="text-lg font-semibold text-center md:text-left">{name}</h4>
                  <h4 className="text-3xl font-semibold font-fStyle text-center md:text-left">{title}</h4>
                  <p className="dark:text-gray-600 my-2 lg:text-start text-center">{description}</p>
                  <hr color="#070707" />
                  <div className="flex gap-7 mt-2">
                     <p className="bg-slate-200 text-center font-bold px-5 rounded-lg py-1 text-red-400">{status}</p>
                     <p className="bg-slate-200 text-center font-bold px-5 rounded-lg py-1 text-red-400">{price}</p>
                     <p className="bg-slate-200 text-center font-bold px-5 rounded-lg py-1 text-red-400">{area}</p>
                  </div>
               </div>
            </div>
            
         </div>
      </div>
   );
};

export default OrderCard;