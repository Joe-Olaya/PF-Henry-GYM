const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/routes.js');
const server = express();
const { auth } = require('express-openid-connect');
require('dotenv').config()
const {SECRET, BASEURL, CLIENTID, ISSUERBASEURL} = process.env

server.name = 'API';

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: SECRET,
//   baseURL: BASEURL,
//   clientID: CLIENTID,
//   issuerBaseURL: ISSUERBASEURL
// };

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
// server.use(auth(config));

server.use('/', routes);

// Error catching endware.
// server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
//   const status = err.status || 500;
//   const message = err.message || err;
//   console.error(err);
//   res.status(status).send(message);
// });

// const mercadopago = require("mercadopago");
// require ("dotenv").config();

// mercadopago.configure({
//     access_token:"TEST-4683237095917088-051018-7920e7a930b8e6449685bc6da8bfeb03-240811749 "
// })


// Crea un objeto de preferencia
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
//       // global.id = response.body.id;
//       //console.log(response)
//       console.log('Repuesta de mercadopago');
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
  

module.exports = server;
