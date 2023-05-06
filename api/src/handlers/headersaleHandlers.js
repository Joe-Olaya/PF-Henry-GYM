const {createHeadersale} = require('../controllers/headersaleControllers')
const {createNewBody} = require('../controllers/bodySaleControllers')
const {getProductById} = require('../controllers/productsControllers')
const {getUserById} = require('../controllers/usersControllers')

const createSaleHandler = async (req,res) => {
    const {client_id, product_list} = req.body;
    try {
        const client = getUserById(client_id);
        const header = createHeadersale(client.id);
        const bodies = [];
        product_list.map(e => {
            let product = getProductById(e.product_id)
            let price = product.price * e.units
            let body = createNewBody(price, e.units, product.id, header.id )
            bodies.push(body)
        })
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