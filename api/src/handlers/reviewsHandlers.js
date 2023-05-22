const {createReview, getReviews, getAllReviews} = require('../controllers/reviewsControllers')
const { updateProduct } = require('../controllers/productsControllers')

const createReviewsHandler = async (req,res) =>{
    const {userId, productId, punctuation, review} = req.body;
    try {
        const newReview = await createReview(userId, productId, punctuation, review, res);
        const average_score = await puntuacionGeneral(productId)
        const updatePunctuationProduct = await updateProduct(productId, average_score)
        res.status(200).send(newReview)
    } catch (error) {
        res.status(200).send(error)
    }
}

const getReviewsHandler = async (req,res) => {
    const { productId, page = 0 } = req.query
    const reviews = await getReviews(productId, page, res);

    return reviews;
}

const puntuacionGeneral = async (productId) => {
    const reviews = await getAllReviews(productId);

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
    
    let total = Math.ceil(suma / punctuation.length)
    return total

}

const getPunctuationHandler = async (req,res) => {
    const { productId } = req.params

    const total = await puntuacionGeneral(productId)

    res.status(200).json({total})

}

module.exports = {
    createReviewsHandler, 
    getReviewsHandler, 
    getPunctuationHandler
}