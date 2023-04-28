const {getUserByDNI} = require('../controllers/usersControllers')



const loginUserHandler = async (req,res) => {
    const {dni, password} = req.body
    try {
        const results = getUserByDNI(dni, password);
        if(!results[0]){
            res.status(400).json({
                error:true,
                message:`No se encontro el usuario ${dni}`
            })
        }
        res.status(200).json({
            error:false,
            message:`User ${dni} encontrado`})
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

module.exports = {
    loginUserHandler,
}