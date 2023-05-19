const {Review} = require("../db.js")

const createReview = async (userId, productId, punctuation, review, res) => {
    try {
        const newReview = await Review.create({
            punctuation,
            review,
            productId,
            userId
        })
        res.status(200).json(newReview)
    } catch (error) {
        res.status(400).json(error)
    }
}

const getReviews = async (productId, page, res) => {
      let options = {
        where: {productId:productId},
        order: [['createdAt', 'ASC']],
        limit: 5,
        offset: +page * 5,
      };
      console.log(productId)
      try {
        const { count, rows } = await Review.findAndCountAll(options);
        console.log('reviews controller');
        
        res.status(200).send({
          products: rows,
          actual_page: ++page,
          total_reviews: count,
          total_pages : Math.ceil(count / 5)
        });
      } catch (error) {
        res.status(500).send(error);
      }
}

const getAllReviews = async (productId) => {
    try {
        const allReviews = await Review.findAll({where:{productId}})
        return allReviews
    } catch (error) {
        return error
    }

}

module.exports = {
    createReview, 
    getReviews, 
    getAllReviews
}