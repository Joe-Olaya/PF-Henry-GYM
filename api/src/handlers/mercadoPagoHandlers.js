const mercadopago = require("mercadopago");
require("dotenv").config();
mercadopago.configure({
    access_token: process.env.MERCADOPAGO_TOKEN
});

const newSaleMPHandler = async(req,res)=>{
  const {items} = req.body
  try {
    let preference = {
      items:items,
      back_urls:{
        success: 'http://localhost:3000/store',
        failure: 'http://localhost:3000/store',
      },
      auto_return: "approved",
      statement_descriptor:"Supplies & Training"
    };
    mercadopago.preferences
        .create(preference)
        .then( (response)=> {
          res.send(response.body.id)
          console.log(preference)
        })
    } catch (error) {
      console.log(error) 
    }
  
  }

module.exports = {
    newSaleMPHandler,
}