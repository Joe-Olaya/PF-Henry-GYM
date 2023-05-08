const { Headersale } = require("../db");

const createHeadersale = async (clientId, clientName, clientAddress) => {
  const newHeadersale = await Headersale.create({
    clientId: clientId,
    clientName: clientName,
    clientAddress: clientAddress,
  });
  return newHeadersale;
};

const getRemitById = async (remitId) => {
  const remit = await Headersale.findOne({
    where : {
      id : remitId
  }})
  const jsonRemit = {
    id:remit.id,
    clientId: remit.clientId,
    clientName: remit.clientName,
    clientAddress: remit.clientAddress
  }
  return jsonRemit
}

module.exports = {
    createHeadersale,
    getRemitById
}
