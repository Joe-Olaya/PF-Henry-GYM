const {Review, User} = require("../db.js")

const createReview = async (userId, productId, punctuation, review) => {
    try {
        console.log(userId, productId, punctuation, review)
        const newReview = await Review.create({
            userId,
            productId,
            punctuation,
            review,
        })
        console.log(newReview)
        return newReview
    } catch (error) {
        return error
    }
}

const getReviews = async (productId, page, res) => {
      let options = {
        where: {productId:productId},
        include: {
          model: User,
          attributes: ['name', 'email']
        },
        order: [['createdAt', 'DESC']],
        limit: 5,
        offset: +page * 5,
      };
      try {
        const { count, rows } = await Review.findAndCountAll(options);
        console.log('reviews controller');
        
        res.status(200).send({
          reviews: rows,
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