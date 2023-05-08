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

const getBodies = async (remitId) => {
    const bodies = await Bodysale.findAll({
        where:{
            headersaleId:remitId
        }
    })
    bodiesJson = []
    bodies.forEach(e => {
        bodiesJson.push({
            productId : e.productId,
            productName: "",
            units: e.units,
            price: e.price
        })
    });
    return bodiesJson;
}

module.exports = {
    createNewBody,
    getBodies
}