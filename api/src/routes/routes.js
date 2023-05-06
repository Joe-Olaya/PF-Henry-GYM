require("dotenv").config();
const { Router } = require('express');
const { fullDbData } = require("../handlers/dbDataHandlers")
const { validateDni, validatePassword } = require("../handlers/validationsHandlers");
const { getExercisesHandler, getExecercisesByIdHandler } = require("../handlers/exercisesHandlers");
const { loginUserHandler, registerUserHandler, getAllUsersHandler, deleteUserHandler, reactiveUserHandler } = require("../handlers/usersHandlers");
const { createProductsHandler, getProductsHandler, deleteProductHandler } = require("../handlers/productHandlers");
//const { createHeadersaleHandler } = require('../handlers/headersaleHandlers')
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
router.get('/products', getProductsHandler)
router.delete('/products/:name', deleteProductHandler)
//router.post('/createSale', createHeadersaleHandler)

module.exports = router;