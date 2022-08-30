import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../auth/Admin";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Products from "../product/Products"



 function AllRoutes(){
    return(
        <div>
            
            <Routes>
                <Route path='/' element={<Products/>} />
                <Route path='/admin' element={<Admin />}/>
                <Route path='/signin' element={<Login/>} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
            <Footer />
            
        </div>
    )
}

export  default AllRoutes