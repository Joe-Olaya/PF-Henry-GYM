const { Headersale } = require("../db");

const createHeadersale = async (id, productName, clientName, clientAdress, date) => {
  const newHeadersale = await Headersale.create({
    id: id,
    name: productName,
    date: date,
    clientName: clientName,
    clientAdress: clientAdress
  });
  return newHeadersale;
};

module.exports = {
    createHeadersale
}
