import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../auth/Admin";
import AdminTemplate from "../auth/AdminDashboard";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import Footer from "../footer/Footer";
import EditProduct from "../product/EditProduct";
import Products from "../product/Products"



 function AllRoutes(){
    return(
        <div>
            
            <Routes>
                <Route path='/' element={<Products/>} />
                <Route path='/admin' element={<AdminTemplate/>}/>
                <Route path='/addproducts' element={<Admin/>}/>
                <Route path='/signin' element={<Login/>} />
                <Route path='/signup' element={<Signup />} />
                <Route path="/recipe/:id" element={<EditProduct />}/>
            </Routes>
            <Footer />
            
        </div>
    )
}

export  default AllRoutes