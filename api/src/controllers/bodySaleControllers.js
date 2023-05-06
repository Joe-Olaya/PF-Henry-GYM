const {Bodysale} = require('../db')

const createNewBody = async (price, units, ProductId, HeadersaleId) => {
    const bodySale = await Bodysale.create({
        price,
        units,
        ProductId,
        HeadersaleId
    })
    return bodySale;
}

module.exports = {
    createNewBody
}