const axios = require("axios");
const { Product } = require("../db.js");

const createProducts = async (name, description, price, image) => {
  const newProduct = await Product.create({
    name: name,
    description: description,
    price: price,
    image: image,
    state: "Active"
  });
  return newProduct;
};

const getProductById = async (id) => {
  const product = await Product.findByPk(id);
  return product;
};

const getAllProducts = async () => {
  const allProducts = await Product.findAll();
  return allProducts;
};

const deleteProduct = async (id) => {
  const inactiveProduct = await Product.Update(
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
  getAllProducts,
  deleteProduct,
  getProductById,
  reactiveProduct
};
