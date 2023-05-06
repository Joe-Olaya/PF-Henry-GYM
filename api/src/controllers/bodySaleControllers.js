const {Bodysale} = require('../db')

const createNewBody = async (price, units, productId, headersaleId) => {
    const bodySale = await Bodysale.create({
        price,
        units,
        productId,
        headersaleId
    })
    const bodyJson = {
        price:bodySale.price,
        units:bodySale.units,
        productId:bodySale.productId,
        headersaleId:bodySale.headersaleId
    }
    return bodyJson;
}

module.exports = {
    createNewBody
}