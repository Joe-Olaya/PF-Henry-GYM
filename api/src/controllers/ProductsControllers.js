const axios = require("axios");
const {Product} = require("../db.js")

const createProducts = async(name, description, price, image) => {
    const newProduct = await Product.create({
        name: name,
        description: description,
        price: price,
        image: image 
      });
    console.log(newProduct)
    return newProduct
} 

module.exports = {
    createProducts
}
