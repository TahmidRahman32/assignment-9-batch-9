import toast from "react-hot-toast";

const getOrder = () => {
   const order = localStorage.getItem("order");
   if (order) {
      return JSON.parse(order);
   }
   return [];
};

const setOrder = (id) => {
   const storeOrder = getOrder();
   const exist = storeOrder.find((orderId) => orderId === id);
   if (!exist) {
      storeOrder.push(id);
      localStorage.setItem("order", JSON.stringify(storeOrder));
      toast.success("Successfully toasted!");
   } else {
      return toast.error("This didn't work.");
   }
};

// export const saveLocalStorage = (blog) => {
//    let blogs = getLocalStorage();
//    const isExist = blogs.find((b) => b.id === blog.id);
//    if (isExist) {
//       return
//    } else {
//       blogs.push(blog);
//       localStorage.setItem("blog", JSON.stringify(blogs));

//    }
// };

const orderDelete = (id) => {
   let order = getOrder();

   const remaining = order.filter((b) => b.id !== id);

   localStorage.removeItem("order", JSON.stringify(remaining));
   // console.log(remaining);
   toast.success("Successfully Delete Ui!");
};

export { setOrder, getOrder, orderDelete };
