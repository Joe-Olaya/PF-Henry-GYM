const { getUserByDNI, createUser, getAllUsers } = require('../controllers/usersControllers')



const loginUserHandler = async (req,res) => {
    const {dni, password} = req.body
    try {
        const results = getUserByDNI(dni, password);
        res.status(200).json({results})
    } catch (error) {
        res.status(400).json({error:error});
    }
};

const registerUserHandler = async (req,res) =>{
    const {dni, password, name, email, adress} = req.body
    try {
        const results = createUser(dni, password, name, email, adress);
        res.status(200).json({results})
    } catch (error) {
        res.status(400).json({error:error});
    }
}

const getAllUsersHandler = async (req,res) => {
    try {
        const results = getAllUsers()
        res.status(200).json({results})
    } catch (error) {
        res.status(400).json({error:error})
    }
}

module.exports = {
    loginUserHandler,
    registerUserHandler,
    getAllUsersHandler
}