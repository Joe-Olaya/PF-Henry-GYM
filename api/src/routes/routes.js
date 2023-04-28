require("dotenv").config();
const { Router } = require('express');
const { getExcercisesHandler } = require("../handlers/excercisesHandlers")
const { getApiInfo } = require("../controllers/controllers");
const router = Router();



router.get('/', async(req, res) =>{
  const APIinfo = await getApiInfo();
  res.json(APIinfo);
})

router.get('/exercises', getExcercisesHandler)

module.exports = router;