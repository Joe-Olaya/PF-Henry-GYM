import React, { useState } from "react";
import { useSelector } from "react-redux";


  const ShoppingCart = () => {
    const cart = useSelector((state) => state.cart);
    console.log(localStorage)
  
    return (
      <div>
        
            <h3 style={{color:"white"}}>name</h3>
            <p style={{color:"white"}}>Price:price</p>
          
          </div>
        )
    
    
  };
  
  



export default ShoppingCart;



  
