import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Product from "./components/Product";

function App() {
     const router=createBrowserRouter([
      {
        path:"/",
        element: <><Navbar title="TextUtils"/><Home imgAddress="https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png"/></>
      },
     
      {
        path:"/product",
        element: <><Navbar title="TextUtils"/><Product/></>
      },

     ])


     

  return (
    <div>

    <RouterProvider router={router}/>
   
    
    </div>
  );
}

export default App;
