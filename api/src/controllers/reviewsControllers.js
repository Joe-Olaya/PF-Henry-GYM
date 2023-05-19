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
        where: {productId},
        order: [['createdAt', 'ASC']],
        limit: 5,
        offset: +page * 5,
      };
      try {
        const { count, rows } = await Review.findAndCountAll(options);
        
        res.status(200).send({
          total: count,
          products: rows,
          total_pages : Math.ceil(count / limit)
        });
      } catch (error) {
        res.status(500).send(error);
      }
}

const getAllReviews = async (productId, res) => {
    try {
        const allReviews = await Review.findAll({where:{productId}})
        res.status(200).json(allReviews)
    } catch (error) {
        res.status(500).json({error})
    }

}

module.exports = {
    createReview, 
    getReviews, 
    getAllReviews
}