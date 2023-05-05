const { createProducts, getAllProducts, deleteProduct } = require ("../controllers/ProductsControllers");



const createProductsHandler = async(req, res) => {
   const {name, description, price, image}= req.body;
   try {
    const newProduct = await createProducts(name, description, price, image);
       res.status(200).send(newProduct)
   } catch (error) {
    console.log(error)
       res.status(400).send('product not created 😢')
   };
};

const getProductsHandler = async(req, res) => {
    try {
         const allProducts = await getAllProducts();
        res.status(200).send(allProducts)
     } catch (error) {
        res.status(404).send(error)
     };
};

const deleteProductHandler = async(req, res) => {
      const name = req.params.name
      console.log(name)
    try {
        const deleteProducts = await deleteProduct(name)
        res.status(200).send('product deleted succesfully 👌')
    } catch (error) {
        res.status(400).send(error)
    }
}  

module.exports={
    createProductsHandler,
    getProductsHandler,
    deleteProductHandler
}
