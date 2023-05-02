require("dotenv").config();
const { Router } = require('express');
const { fullDbData } = require("../handlers/dbDataHandlers")
const { validateDni, validatePassword } = require("../handlers/validationsHandlers");
const { getExercisesHandler, getExecercisesByIdHandler } = require("../handlers/exercisesHandlers");
const { loginUserHandler, registerUserHandler, getAllUsersHandler, deleteUserHandler, reactiveUserHandler } = require("../handlers/usersHandlers");
const router = Router();

router.get('/loadingDb', fullDbData);
router.get('/exercises', getExercisesHandler);
router.get('/exercises/:id', getExecercisesByIdHandler);
router.get('/users', getAllUsersHandler);
router.delete('/users/:id', deleteUserHandler);
router.post('/users/:id', reactiveUserHandler);
router.get('/login', validateDni, validatePassword, loginUserHandler);
router.post('/register', validateDni, validatePassword, registerUserHandler);

module.exports = router;