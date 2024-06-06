import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getOrder, orderDelete } from "../../Store/LocalStore";
import OrderCard from "./OrderCard";

const OrderList = () => {
   const orderData = useLoaderData();
   const [Orders, setOrder] = useState([]);
   useEffect(() => {
      const storeOrder = getOrder();
      if (orderData.length > 0) {
         const orders = orderData.filter((order) => storeOrder.includes(order.id));
         setOrder(orders);
      }
   }, [orderData]);

    const handleListDelete = (id) => {
       orderDelete(id);
    };
   return (
      <div>
         {Orders.map((order) => (
            <OrderCard key={order.id} order={order} handleListDelete={handleListDelete}></OrderCard>
         ))}
      </div>
   );
};

export default OrderList;
