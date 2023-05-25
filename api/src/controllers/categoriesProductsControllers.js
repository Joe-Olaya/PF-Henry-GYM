const { Categoryproduct } = require('../db')

const getCategoriesProducts = async () => {
    try {
        const categories = await Categoryproduct.findAll();
        return categories
    } catch (error) {
        return error
    }
}



module.exports = {
    getCategoriesProducts,
}