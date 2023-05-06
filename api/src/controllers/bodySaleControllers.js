const {Bodysale} = require('../db')
const {getProductById} = require('./ProductsControllers')

const createNewBody = (headerId, productList) => {
    productList = {
        product_id,
        units,
    }
    const bodies = [];
    productList.map(async (e) => {
        const product = await getProductById(e.product_id);
        const price = product.price * e.units
        const bodySale = await Bodysale.create({
            price: price,
            units: e.units,
            ProductId: product.id,
            HeadersaleId: headerId
        })
        bodies.push(bodySale)
    })
    return bodies;
}

module.exports = {
    createNewBody
}