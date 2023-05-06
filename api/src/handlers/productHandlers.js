const { createProducts, getAllProducts, deleteProduct, reactiveProduct } = require ("../controllers/productsControllers");



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
      const {id} = req.params;
    try {
        const deleteProducts = await deleteProduct(id)
        res.status(200).send('product deleted succesfully 👌')
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const reactiveProductHandler = async (req,res) => {
    const {id} = req.params;
    try {
      const result = await reactiveProduct(id)
      res.status(200).json({ result });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

module.exports={
    createProductsHandler,
    getProductsHandler,
    deleteProductHandler,
    reactiveProductHandler
}
