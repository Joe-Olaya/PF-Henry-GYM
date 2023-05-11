require("dotenv").config();

const { Router } = require('express');
const { fullDbData } = require("../handlers/dbDataHandlers")
const { validateDni, validatePassword } = require("../handlers/validationsHandlers");
const { getExercisesHandler, getExecercisesByIdHandler } = require("../handlers/exercisesHandlers");
const { loginUserHandler, registerUserHandler, getAllUsersHandler, deleteUserHandler, reactiveUserHandler } = require("../handlers/usersHandlers");
const { createProductsHandler, getProductsHandler, deleteProductHandler, reactiveProductHandler } = require("../handlers/productHandlers");
const { createSaleHandler, getRemitByIdHandler } = require('../handlers/headersaleHandlers')
const router = Router();


router.get('/loadingDb', fullDbData);
router.get('/exercises', getExercisesHandler);
router.get('/exercises/:id', getExecercisesByIdHandler);
router.get('/users', getAllUsersHandler);
router.delete('/users/:id', deleteUserHandler);
router.post('/users/:id', reactiveUserHandler);
router.get('/login', validateDni, validatePassword, loginUserHandler);
router.post('/register', validateDni, validatePassword, registerUserHandler);
router.post('/products', createProductsHandler);
router.get('/products', getProductsHandler);
router.delete('/products/:id', deleteProductHandler);
router.post('/products/:id', reactiveProductHandler);
router.post('/createSale', createSaleHandler);
router.get('/remit/:id', getRemitByIdHandler);
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

router.post('/prueba',async(req,res)=>{
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

})
  

module.exports = router;