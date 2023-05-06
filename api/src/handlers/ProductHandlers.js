const { createProducts, getAllProducts, deleteProduct } = require ("../controllers/ProductsControllers");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  //configuramos cloudinary
  cloud_name: "datqa8u9o",
  api_key: "521123927693672",
  api_secret: "6aaO--X7Qx1Bmg1UUEIyjJRSaUM",
}); ///a futuro seria guardar esto en el archivo .env



const createProductsHandler = async(req, res) => {
   const {name, description, price, image}= req.body;
   try {
    const imageupload= await cloudinary.uploader.upload(image, {
      resource_type: "image",
      folder: "supplies and training",
      public_id: "private_image",
      type: "private",
    })
    const urlImage= imageupload.secure_url

    const newProduct = await createProducts(name, description, price, urlImage);
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
