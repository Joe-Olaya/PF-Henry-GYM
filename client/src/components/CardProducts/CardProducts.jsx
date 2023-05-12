import "./CardProducts.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'


const CardProducts = (props) => {
    initMercadoPago('TEST-c64788b2-8aa3-431e-8e04-4295bcce4784');
    const [id,setId]=useState('')
    useEffect(()=>{
      const getidmercadopago =async()=>{
            let product={
                items:[{
                title:props.name,
                unit_price:1,
                quantity:props.price
             }]
           }
         const peticion =await axios.post('http://localhost:3001/mpcompra',product)
         setId(peticion.data)
       }
   getidmercadopago()
    },[props])
    
     
    
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
           {id&& <div>
                <Wallet initialization={{ preferenceId: id}} />
            </div>}
            </div>
            </div>
        </div>
    )
}

export default CardProducts;