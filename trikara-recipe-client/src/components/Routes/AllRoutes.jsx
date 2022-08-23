import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import Footer from "../footer/Footer";
import Home from "../Home";
import Navbar from "../navbar/Navbar";


 function AllRoutes(){
    return(
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home/>} />
                {/* <Route path='/products' element={<Products/>} />
                <Route path='/products/:id' element={<Product/>} /> */}
                <Route path='/login' element={<Login/>} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
            <Footer />
            
        </div>
    )
}

export  default AllRoutes