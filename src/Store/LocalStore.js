const getOrder = ()=>{
   const order = localStorage.getItem('order') ;
   if(order){
      return JSON.parse(order)
   }
   return [];
}

const setOrder =(id) =>{
   const storeOrder = getOrder();
   const exist = storeOrder.find(orderId => orderId === id );
   if(!exist){
      storeOrder.push(id);
      localStorage.setItem("order", JSON.stringify(storeOrder));
   }
   
}

export {setOrder, getOrder}