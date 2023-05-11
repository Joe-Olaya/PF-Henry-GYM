const { createHeadersale, getRemitById } = require("../controllers/headersaleControllers");
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

const getRemitByIdHandler = async (req,res) => {
  const { id } = req.params
  try {
    const remit = await getRemitById(id)
    const bodies = await getBodiesWhitName(remit.id)
    // let bodies = await getBodies(remit.id)
    // bodies.map(async e => {
    //   let productData = await getProductById(e.productId);
    //   e.productName = productData.name;
    //   console.log(e)
    // })
    // console.log(bodies)
    res.status(200).json({
      remit : remit,
      bodies : bodies
    })
  } catch (error) {
    res.status(400).json(error)
  }
}

const getBodiesWhitName = async (remitId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let bodies = await getBodies(remitId)
      for (const elemento of bodies) {
        let productData = await getProductById(elemento.productId);
        elemento.productName = productData.name;
      }
      resolve(bodies);
    } catch (error) {
      reject(error);
    }
  })
}

module.exports = {
  createSaleHandler,
  getRemitByIdHandler
};
