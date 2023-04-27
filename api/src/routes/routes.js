require("dotenv").config();
const { Router } = require('express');
const { getApiInfo } = require("./controllers");
const router = Router();



router.get('/', async(req, res) =>{
    const APIinfo = await getApiInfo();
  res.json(APIinfo);
})

module.exports = router;