const { createProducts, getAllProducts, deleteProduct, reactiveProduct, getProductByName } = require ("../controllers/productsControllers");
const cloudinary = require("cloudinary").v2;
require('dotenv').config();
const {CLOUD_NAME, API_KEY, API_SECRET} = process.env

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
});



const createProductsHandler = async(req, res) => {
   const {name, description, price, stock, image}= req.body;
   try {
    const imageupload= await cloudinary.uploader.upload(image, {
      resource_type: "image",
      folder: "supplies and training",
      public_id: "private_image",
      type: "private",
    })
    const urlImage= imageupload.secure_url

    const newProduct = await createProducts(name, description, price, stock, urlImage);
       res.status(200).send('Product created successfully')
   } catch (error) {
    console.log(error)
       res.status(400).send('product not created 😢')
   };
};

const getProductsHandler = async(req, res) => {
  const { name } = req.query;
  try {
        const allProducts = name ? await getProductByName(name) : await getAllProducts();
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
