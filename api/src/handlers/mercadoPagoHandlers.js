const mercadopago = require("mercadopago");
require("dotenv").config();
const {URL_HOST} = process.env

mercadopago.configure({
    access_token: process.env.MERCADOPAGO_TOKEN
});



const newSaleMPHandler = async(req,res)=>{
  const {items} = req.body
  try {
    let preference = {
      items:items,
      back_urls:{
        success: `${URL_HOST}/store`,
        failure: `${URL_HOST}/store`,
      },
      auto_return: "approved",
      statement_descriptor:"Supplies & Training"
    };
    mercadopago.preferences
        .create(preference)
        .then( (response)=> {
          res.send(response.body.id)
        })
    } catch (error) {
      console.log(error) 
    }
  
  }

module.exports = {
    newSaleMPHandler,
}