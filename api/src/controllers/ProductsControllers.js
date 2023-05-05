const axios = require("axios");
const {Products} = require("../db.js")

const createProducts = async(name, description, price, image) => {
    const newProduct = await Products.create({
        name: name,
        description: description,
        price: price,
        image: image 
      });
    console.log(newProduct)
    return newProduct
}; 

const getAllProducts = async() => {
    const allProducts = await Products.findAll()
    return allProducts
};

const deleteProduct = async(name) => {
    await Products.destroy({
        where: {name}
    });
} ;
   
module.exports = {
    createProducts,
    getAllProducts,
    deleteProduct
}
