const {createReview, getReviews, getAllReviews} = require('../controllers/reviewsControllers')

const createReviewsHandler = async (req,res) =>{
    const {userId, productId, punctuation, review} = req.body;
    const newReview = await createReview(userId, productId, punctuation, review, res);

    return newReview
}

const getReviewsHandler = async (req,res) => {
    const { productId, page } = req.query
    const reviews = await getReviews(productId, page, res);

    return reviews
}

const getPunctuationHandler = async (req,res) => {
    const { productId } = req.params

    const reviews = await getAllReviews(productId, res);

    let punctuation = [];
    let suma = 0;

    reviews.forEach(e => {
        if (e.punctuation){
            punctuation.push(+e.punctuation)
        }
    });

    punctuation.map(e => {
        suma += e
    });
    
    let total = suma / punctuation.length

    return total

}

module.exports = {
    createReviewsHandler, 
    getReviewsHandler, 
    getPunctuationHandler
}