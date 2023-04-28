require("dotenv").config();
const { Router } = require('express');
const { validateDni, validatePassword } = require("../handlers/validationsHandlers")
const { getExcercisesHandler, getExecercisesByIdHandler } = require("../handlers/excercisesHandlers")
const { loginUserHandler } = require("../handlers/usersHandlers")
const { getApiInfo } = require("../controllers/controllers");
const router = Router();


router.get('/', async(req, res) =>{
  const APIinfo = await getApiInfo();
  res.json(APIinfo);
});

router.get('/exercises', getExcercisesHandler);
router.get('/exercises/:id', getExecercisesByIdHandler);
router.get('/login', validateDni, validatePassword, loginUserHandler);

module.exports = router;