const { getBodies } = require("../controllers/bodySaleControllers");
const { getProductById } = require('../controllers/productsControllers')

const getBodiesHandler = async (req, res) => {
    const {remitId} = req.params

      try {
        let bodies = await getBodies(remitId)
        for (const elemento of bodies) {
          let productData = await getProductById(elemento.productId);
          elemento.productName = productData.name;
        }
        res.status(200).json({bodies});
      } catch (error) {
        res.status(400).json(error)
      }

  }

module.exports = {
  getBodiesHandler
}