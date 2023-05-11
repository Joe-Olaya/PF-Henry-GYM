// const mercadopago = require("mercadopago");
// require ("dotenv").config();

// mercadopago.configure({
//     access_token:"TEST-4683237095917088-051018-7920e7a930b8e6449685bc6da8bfeb03-240811749 "
// })


// // Crea un objeto de preferencia
// let preference = {
//     items: [
//       {
//         title: "name",
//         unit_price: 50,
//         quantity: 2,
//       },
//     ],
//   };
  
//   mercadopago.preferences
//     .create(preference)
//     .then(function (response) {
//       // Este valor reemplazará el string "<%= global.id %>" en tu HTML
//       global.id = response.body.id;
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
  

// module.exports = {
//    mercadopago
// }