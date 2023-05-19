const { Product } = require("../db.js");
const { Op } = require("sequelize");

const createProducts = async (name, description, price, stock, image, categoryproductId, offer) => {
  const newProduct = await Product.create({
    name: name,
    description: description,
    price: price,
    stock: stock,
    image: image,
    categoryproductId,
    offer,
    state: "Active",
  });
  return newProduct;
};

const getProductById = async (id) => {
  const product = await Product.findByPk(id);
  return product;
};

const getProducts = async (
  page,
  size,
  name,
  orderBy,
  order,
  offer,
  res
) => {
  
  let filterOps = {
    [Op.and]: [
      {
        name: { [Op.like]: `${name}%` },
      },
      offer ? { offer: true } : {},
    ],
  };

  let options = {
    where: filterOps,
    order: [[`${orderBy}`, `${order}`]],
    limit: +size,
    offset: +page * +size,
  };
  try {
    const { count, rows } = await Product.findAndCountAll(options);
    res.status(200).send({
      total: count,
      products: rows,
      total_pages : Math.ceil(count / limit)
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteProduct = async (id) => {
  const inactiveProduct = await Product.update(
    {
      state: "Inactive",
    },
    {
      where: { id: id },
    }
  );
};

const reactiveProduct = async (id) => {
  const activeProduct = await Product.update(
    {
      state: "Active",
    },
    {
      where: { id: id },
    }
  );
};

module.exports = {
  createProducts,
  deleteProduct,
  getProductById,
  reactiveProduct,
  getProducts,
};
