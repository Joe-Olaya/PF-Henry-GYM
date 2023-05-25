const { getCategoriesProducts } = require('../controllers/categoriesProductsControllers');

const categories = [
    "Protein",
    "Pre-Workout",
    "Performance",
    "Weight Management",
    "Vitamins & Health",
    "Clothes",
    "Accessories"
  ];
  
  const getCategoriesProductsHandler = async (req, res) => {
    const categoriesProducts = await getCategoriesProducts();
    return [...categories, ...categoriesProducts];
  }
  
  module.exports = {
    getCategoriesProductsHandler
  }