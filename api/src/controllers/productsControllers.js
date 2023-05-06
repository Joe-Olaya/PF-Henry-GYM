const axios = require("axios");
const { Products } = require("../db.js");

const createProducts = async (name, description, price, image) => {
  const newProduct = await Products.create({
    name: name,
    description: description,
    price: price,
    image: image,
  });
  console.log(newProduct);
  return newProduct;
};

const getProductById = async (id) => {
  const product = await Products.findByPk(id);
  return product;
};

const getAllProducts = async () => {
  const allProducts = await Products.findAll();
  return allProducts;
};

const deleteProduct = async (id) => {
  const productId = await getProductById(id);
  const inactiveProduct = await Products.Update(
    {
      state: "inactive",
    },
    {
      where: { id: productId },
    }
  );
};

const reactiveProduct = async (id) => {
  const productId = await getProductById(id);
  const activeProduct = await Products.update(
    {
      state: "Active",
    },
    {
      where: { id: productId },
    }
  );
};

module.exports = {
  createProducts,
  getAllProducts,
  deleteProduct,
  getProductById,
  reactiveProduct
};
