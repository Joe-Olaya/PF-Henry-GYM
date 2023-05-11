// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
    access_token:"APP_USR-4683237095917088-051018-4d88d52cf5afad12e4afd3c940705070-240811749"
});
let preference = {
  items: [
    {
      title: "pesas",
      unit_price: 100,
      quantity: 1,
      
    },
  ],
};

const newSaleMPHandler = async(req,res)=>{
    const {items}=req.body
    
    try {
       mercadopago.preferences
        .create({items})
        .then( (response)=> {
          // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
          res.send(response.body.id)
          console.log(response)
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.log(error) 
    }
  
  }

module.exports = {
    newSaleMPHandler,
}