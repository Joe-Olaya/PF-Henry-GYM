import "./CardProducts.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'


const CardProducts = (props) => {
    initMercadoPago('APP_USR-61af0d9c-d680-4246-ac67-d35a916e71e8');
    const [id,setId]=useState(0)

 
      const getidmercadopago =async()=>{
            let product={
                items:[{
                title:props.name,
                unit_price:10,
                quantity:props.price
             }]
           }
         const peticion =await axios.post('http://localhost:3001/mpcompra',product)
         setId(peticion.data)
       }

    
    
     
    
    return(
        <div className="cardPrd">
                <img className="productImg" src={props.image}/>
            <div className="infoPrd">
            <h1 className="titlePrd">
            <p>{props.name}</p>
            </h1>
            <div className="descriptionPrd">
                <h1>Description: {props.description}</h1>
                <h1>Price: {props.price}</h1>
        
                <button onClick={()=>console.log(id)}>ver id</button>
                <button onClick={getidmercadopago}>traer info</button>
                <button >
                    <Wallet initialization={{ preferenceId: id}} />
                </button>
            </div>
            </div>
        </div>
    )
}

export default CardProducts;