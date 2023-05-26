const {
  createProducts,
  getProducts,
  deleteProduct,
  reactiveProduct,
  updateProduct,
  getProductById
} = require("../controllers/productsControllers");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
});

const createProductsHandler = async (req, res) => {
  const { name, description, price, stock, image, categoryproductId } = req.body;
  try {
    let urlImage = ''
    if(image){
      const imageupload = await cloudinary.uploader.upload(image, {
        resource_type: "image",
        folder: "supplies and training",
        public_id: "private_image",
        type: "private",
      });
      urlImage = imageupload.secure_url;
    } else {
      urlImage = "no hay foto disponible"
    }


    const newProduct = await createProducts(
      name,
      description,
      price,
      stock,
      urlImage,
      categoryproductId,
      offer = false
    );
    res.status(200).send("Product created successfully");
  } catch (error) {
    res.status(400).send(error);
  }
};

const getProductsHandler = async (req, res) => {
  const {
    page = 0,
    size = 9,
    name = "",
    orderBy = "id",
    order = "ASC",
    offer = false,
    categoryproductId = null,
  } = req.query;

  const products = await getProducts(
    page,
    size,
    name,
    orderBy,
    order,
    offer,
    categoryproductId,
    res
  );
  
  return products;
};

const deleteProductHandler = async (req, res) => {
  const { id } = req.params;
  console.log('estoy en el handler', id)
  try {
    const deleteProducts = await deleteProduct(id);
    res.status(200).send("product deleted succesfully 👌");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const reactiveProductHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await reactiveProduct(id);
    res.status(200).json({ result });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getProductsByIdHandler = async (req,res) =>{
  const { id } = req.params
  try {
    const result = await getProductById(id)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error)
  }
}

const updateProductsHandler = async (req,res) => {
  const { id } = req.params
  const { price, stock, description} = req.body
  try {
    console.log('entre al handler')
    const result = await updateProduct(id, +price, +stock, description)
    res.status(200).json("Product updated succesfully")
  } catch (error) {
    res.status(400).json(error)
  }
}

module.exports = {
  createProductsHandler,
  getProductsHandler,
  deleteProductHandler,
  reactiveProductHandler,
  updateProductsHandler,
  getProductsByIdHandler
};
