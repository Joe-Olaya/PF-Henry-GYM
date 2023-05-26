const { getCategoriesProducts } = require('../controllers/categoriesProductsControllers');

const getCategoriesProductsHandler = async (req,res) =>{

    const categoriesProducts = await getCategoriesProducts()

    res.status(200).json(categoriesProducts) 
}


module.exports = {
    getCategoriesProductsHandler,
}
