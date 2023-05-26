require("dotenv").config();

const { Router } = require("express");
const { fullDbData } = require("../handlers/dbDataHandlers");
const {
  validateDni,
  validatePassword,
} = require("../handlers/validationsHandlers");
const {
  getExercisesHandler,
  getExecercisesByIdHandler,
} = require("../handlers/exercisesHandlers");
const {
  loginUserHandler,
  registerUserHandler,
  getUsersHandler,
  deleteUserHandler,
  reactiveUserHandler,
  updateUserHandler
} = require("../handlers/usersHandlers");
const {
  createProductsHandler,
  getProductsHandler,
  deleteProductHandler,
  reactiveProductHandler,
  updateProductsHandler,
  getProductsByIdHandler
} = require("../handlers/productHandlers");
const {
  createSaleHandler,
  getRemitsHandler,
} = require("../handlers/headersaleHandlers");
const { getBodiesHandler } = require("../handlers/bodysaleHandler");
const { newSaleMPHandler } = require("../handlers/mercadoPagoHandlers");
const {
  forgotPassword,
  subscription,
} = require("../handlers/nodeMailerHandlers");
const {
  getCategoriesProductsHandler,
  createCategoriesProductsHandler,
} = require("../handlers/categoriesProductsHandlers");
const {
  createReviewsHandler,
  getReviewsHandler,
  getPunctuationHandler,
} = require("../handlers/reviewsHandlers");
const router = Router();

// CARGAR DB
router.get("/loadingDb", fullDbData);
// EJERCICIOS
router.get("/exercises", getExercisesHandler);
router.get("/exercises/:id", getExecercisesByIdHandler);
// USUARIOS
router.get("/users", getUsersHandler);
router.delete("/users/:id", deleteUserHandler);
router.post("/users/:id", reactiveUserHandler);
router.post("/login", loginUserHandler);
router.post("/register", registerUserHandler);
router.put("/users/:id", updateUserHandler);
// PRODUCTOS
router.get("/products", getProductsHandler);
router.get("/products/:id", getProductsByIdHandler);
router.post("/products", createProductsHandler);
router.put("/products/:id", updateProductsHandler);
router.delete("/products/:id", deleteProductHandler);
router.post("/products/:id", reactiveProductHandler);
// CATEGORIAS
router.get("/categoriesproducts", getCategoriesProductsHandler);
//router.post('/categoriesproducts', createCategoriesProductsHandler)
// REVIEWS
router.post("/reviews", createReviewsHandler);
router.get("/reviews", getReviewsHandler);
router.get("/punctuation/:productId", getPunctuationHandler);
// VENTAS
router.post("/createSale", createSaleHandler);
router.get("/remit", getRemitsHandler);
router.get("/body/:remitId", getBodiesHandler);
router.post("/mpcompra", newSaleMPHandler);
//router.post('/passwordreset', forgotPassword);
router.post("/subscription", subscription);

module.exports = router;
