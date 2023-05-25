const { createHeadersale, getRemits } = require("../controllers/headersaleControllers");
const { createNewBody, getBodies } = require("../controllers/bodySaleControllers");
const { getProductById } = require("../controllers/productsControllers");
const { getUserById } = require("../controllers/usersControllers");

const createSaleHandler = async (req, res) => {
  const { client_id, product_list } = req.body;
  try {
    const client = await getUserById(client_id);
    const header = await createHeadersale(
      client.id,
      client.name,
      client.address
    );
    const bodies = await createBodySales(product_list, header.id);
    res.status(200).json({
      header,
      bodies,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

const createBodySales = async (arr, headerId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const resultados = [];
      for (const elemento of arr) {
        let product = await getProductById(elemento.product_id);
        let price = product.price * elemento.units;
        const resultado = await createNewBody(
          price.toFixed(2),
          elemento.units,
          product.id,
          headerId
        );
        resultados.push(resultado);
      }
      resolve(resultados);
    } catch (error) {
      reject(error);
    }
  });
};

const getRemitsHandler = async (req,res) => {
  const { clientId, page = 0 } = req.query
  try {
    const remit = await getRemits(clientId, page, res)
    console.log('estoy en el handler')
    res.status(200).json(remit)
  } catch (error) {
    res.status(400).json(error)
  }
}



module.exports = {
  createSaleHandler,
  getRemitsHandler
};
