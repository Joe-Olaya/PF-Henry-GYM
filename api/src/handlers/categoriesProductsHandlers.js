const { getCategoriesProducts } = require('../controllers/categoriesProductsControllers');

const getCategoriesProductsHandler = async (req,res) =>{

    const categoriesProducts = await getCategoriesProducts()

    return categoriesProducts
}

module.exports = {
    getCategoriesProductsHandler
}