const {createHeadersale} = require('../controllers/headersaleControllers')
const {createNewBody} = require('../controllers/bodysaleControllers')
const {getProductById} = require('../controllers/productsControllers')
const {getUserById} = require('../controllers/usersControllers')

const createSaleHandler = async (req,res) => {
    const {client_id, product_list} = req.body;
    try {
        const client = await getUserById(client_id);
        const header = await createHeadersale(client.id, client.name, client.address);
        const bodies = await new Promise(async (resolve, reject) => {
            try {
              const resultados = [];
              for (const elemento of product_list) {
                let product = await getProductById(elemento.product_id)
                let price = product.price * elemento.units
                const resultado = await createNewBody(price.toFixed(2), elemento.units, product.id, header.id)
                resultados.push(resultado);
              }
              resolve(resultados);
            } catch (error) {
              reject(error);
            }
          });
        res.status(200).json({
            header : header,
            bodies: bodies
        })
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    createSaleHandler
}