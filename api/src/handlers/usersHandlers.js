const {getUserByDNI} = require('../controllers/usersControllers')



const loginUserHandler = async (req,res) => {
    const {dni, password} = req.body
    try {
        const results = getUserByDNI(dni, password);
        res.status(200).json({results})
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

module.exports = {
    loginUserHandler,
}