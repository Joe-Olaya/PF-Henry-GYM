const { Headersale } = require("../db");

const createHeadersale = async (clientId, clientName, clientAddress) => {
  const newHeadersale = await Headersale.create({
    clientId: clientId,
    clientName: clientName,
    clientAddress: clientAddress,
  });
  return newHeadersale;
};

const getRemits = async (clientId, page, res) => {
  let options = {
    where: clientId ? {clientId : clientId} : {},
    order: [['createdAt', 'DESC']],
    limit: 10,
    offset: +page * 10,
  };
  try {
    const { count, rows } = await Headersale.findAndCountAll(options)
    res.status(200).send({
      products: rows,
      actual_page: ++page,
      total_sales: count,
      total_pages : Math.ceil(count / 10)
    });
  } catch (error) {
    res.status(400).send(error)
  }

}

module.exports = {
    createHeadersale,
    getRemits
}
