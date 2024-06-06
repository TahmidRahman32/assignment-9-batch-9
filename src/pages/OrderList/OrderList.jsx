import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../Store/LocalStore";
import OrderCard from "./OrderCard";


const OrderList = () => {
   const orderData = useLoaderData();
   const [Orders, setOrder] = useState([]);
   useEffect(()=>{
      const storeOrder = getOrder();
      if(orderData.length > 0){
         const orders = orderData.filter( order => storeOrder.includes(order.id));
         setOrder(orders)
      }
   },[]) 
   return (
      <div>
         {Orders.length}
         {
            Orders.map(order => <OrderCard key={order.id} order={order} ></OrderCard> )
         }
         
      </div>
   );
};

export default OrderList;