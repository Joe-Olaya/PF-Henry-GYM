const {
  getUserByEmail,
  createOrUpdateUser,
  getUsers,
  deleteUserById,
  reactiveUserById
} = require("../controllers/usersControllers");

const {sendMailRegistered} = require("./nodeMailerHandlers.js")

const loginUserHandler = async (req, res) => {
  const  {email}  = req.body;
    try {
    const results = await getUserByEmail(email);
    res.status(200).json(results)
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const registerUserHandler = async (req, res) => {
  const { dni, name, email, address, phone } = req.body;
  try {
    const results = await createOrUpdateUser(dni, name, email, address, phone);
    // sendMailRegistered(email)
    res.status(200).json( results );
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const getUsersHandler = async (req, res) => {
  const { name = null, userType = null, state = null, dni = null, page = 0, orderBy = "id", order = "ASC"} = req.query;
 
  const results = await getUsers(name, userType, state, dni, page, orderBy, order, res);
  
  return results
};

const deleteUserHandler = async (req,res) => {
  const {id} = req.params;
  try {
    const results = await deleteUserById(id)
    res.status(200).json({ results });
  } catch (error) {
    res.status(400).json({ error: error });
  }
}

const reactiveUserHandler = async (req,res) => {
  const {id} = req.params;
  try {
    const results = await reactiveUserById(id)
    res.status(200).json({ results });
  } catch (error) {
    res.status(400).json({ error: error });
  }
}

module.exports = {
  loginUserHandler,
  registerUserHandler,
  getUsersHandler,
  deleteUserHandler,
  reactiveUserHandler
};
