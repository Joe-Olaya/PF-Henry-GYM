const {createReview, getReviews, getAllReviews} = require('../controllers/reviewsControllers')
const { updatePunctuationProduct } = require('../controllers/productsControllers')

const createReviewsHandler = async (req,res) =>{
    const {userId, productId, punctuation = 0, review = "No hay comentarios"} = req.body;
    try {
        if(!userId){
            res.status(400).send('You must be logged in to leave a comment')
        } else {
            const newReview = await createReview(userId, productId, punctuation, review);
            if(punctuation) {
                const average_score = await puntuacionGeneral(productId)
                if(average_score == NaN){
                    const updatedPunctuationProduct = await updatePunctuationProduct(productId, punctuation)
                } else {
                    const updatedPunctuationProduct = await updatePunctuationProduct(productId, average_score)
                }
            }
            res.status(200).send(newReview)
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getReviewsHandler = async (req,res) => {
    const { productId, page = 0 } = req.query
    const reviews = await getReviews(productId, page, res);

    return reviews;
}

const puntuacionGeneral = async (productId) => {

    const reviews = await getAllReviews(productId);
    if(reviews){
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
        console.log(total)
        return total
    } 
    return 0
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