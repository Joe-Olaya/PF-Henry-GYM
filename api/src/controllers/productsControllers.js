const { Product } = require("../db.js");
const { Op } = require("sequelize");

const createProducts = async (name, description, price, stock, image, categoryproductId, offer) => {
  const newProduct = await Product.create({
    name: name,
    description: description,
    price: price,
    stock: stock,
    image: image,
    categoryproductId,
    offer,
    state: "Active",
  });
  return newProduct;
};

const getProductById = async (id) => {
  const product = await Product.findByPk(id);
  return product;
};

const getProducts = async (
  page,
  size,
  name,
  orderBy,
  order,
  offer,
  categoryproductId,
  res
) => {
  
  let filterOps = {
    [Op.and]: [
      {
        name: { [Op.like]: `${name}%` },
      },
      offer ? { offer: true } : {},
      categoryproductId ? {categoryproductId} : {},
    ],
  };
  
  let options = {
    where: filterOps,
    order: [[`${orderBy}`, `${order}`]],
    limit: +size,
    offset: +page * +size,
  };

  try {
    const { count, rows } = await Product.findAndCountAll(options);
    res.status(200).send({
      products: rows,
      actual_page: ++page,
      total_products: count,
      total_pages : Math.ceil(count / +size)
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteProduct = async (id) => {
  const inactiveProduct = await Product.update(
    {
      state: "Inactive",
    },
    {
      where: { id: id },
    }
  );
};

const reactiveProduct = async (id) => {
  const activeProduct = await Product.update(
    {
      state: "Active",
    },
    {
      where: { id: id },
    }
  );
};
const updateProduct = async (productId, price, stock, description) => {
  const prodUpdated = await Product.update({
    price,
    stock,
    description
  },{
    where: {id:productId}
  })
  return prodUpdated
}

const updatePunctuationProduct = async (id, punctuation) => {
  const updatePunctuationProduct = await Product.update({
    average_score: punctuation
  },{
    where: { id: id}
  })

  return updatePunctuationProduct
}

module.exports = {
  createProducts,
  deleteProduct,
  getProductById,
  reactiveProduct,
  getProducts,
  updatePunctuationProduct,
  updateProduct
};
