const { Categoryproduct } = require('../db')

const getCategoriesProducts = async (res) => {
    try {
        const categories = await Categoryproduct.findAll();
        res.status(200).json(categories)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    getCategoriesProducts
}