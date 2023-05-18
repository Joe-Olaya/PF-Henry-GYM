/* const auth0 = require('auth0');
require('dotenv').config()
const {SECRET,BASEURL,CLIENTID,ISSUERBASEURL} = process.env

const auth0Client = new auth0.AuthenticationClient({
  domain: 'TU_DOMINIO_DE_AUTH0',
  clientId: 'TU_CLIENT_ID',
  clientSecret: SECRET
});

function login(email, password, callback) {
      try {
        auth0Client.login(
            {
              realm: 'Username-Password-Authentication',
              username: email,
              password: password
            },
            function (err, response) {
              if (err) {
                return callback(err);
              }
              return callback(null, response);
            }
          );
      } catch (error) {
        console.log(error);   
      }
} */