const { Headersale } = require("../db");

const createHeadersale = async (clientId, clientName, clientAddress) => {
  const newHeadersale = await Headersale.create({
    clientId: clientId,
    clientName: clientName,
    clientAddress: clientAddress,
  });
  return newHeadersale;
};

module.exports = {
    createHeadersale
}
