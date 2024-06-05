import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";
import "animate.css";

import { RouterProvider } from "react-router-dom";
import router from "./Route/Router";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Route/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
   <div className="max-w-7xl mx-auto">
      <HelmetProvider>
         <AuthProvider>
            <React.StrictMode>
               <RouterProvider router={router} />
            </React.StrictMode>
         </AuthProvider>
      </HelmetProvider>
      <Toaster />
   </div>
);
