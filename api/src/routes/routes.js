require("dotenv").config();
const { Router } = require('express');
const { fullDbData } = require("../handlers/dbDataHandlers")
const { validateDni, validatePassword } = require("../handlers/validationsHandlers");
const { getExercisesHandler, getExecercisesByIdHandler } = require("../handlers/exercisesHandlers");
const { loginUserHandler, registerUserHandler } = require("../handlers/usersHandlers");
const router = Router();


router.get('/', fullDbData);
router.get('/exercises', getExercisesHandler);
router.get('/exercises/:id', getExecercisesByIdHandler);
router.get('/login', validateDni, validatePassword, loginUserHandler);
router.get('/register', validateDni, validatePassword, registerUserHandler);


module.exports = router;