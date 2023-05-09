const axios = require("axios");
const { Product } = require("../db.js");

const createProducts = async (name, description, price, stock, image) => {
  const newProduct = await Product.create({
    name: name,
    description: description,
    price: price,
    stock: stock,
    image: image,
    state: "Active"
  });
  return newProduct;
};

const getProductByName = async (name) => {
  const products = await Product.findAll();
  const cleanData = cleanProductData(products);
  const productsFiltered = cleanData.filter((d) =>
    d.name.toLowerCase().includes(name.toLowerCase())
  );
  return productsFiltered
}

const cleanProductData = (arr) => {
  let data = [];
    arr.map((el) => {
      data.push({
        id: el.id,
        name: el.name,
        price: el.price,
        description: el.description,
        image: el.image,
        stock: el.stock,
        state: el.state
      });
    });
  return data;
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
  reactiveProduct,
  getProductByName
};
