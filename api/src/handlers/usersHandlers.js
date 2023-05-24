const {
  getUser,
  createUser,
  getAllUsers,
  getUserByName,
  deleteUserById,
  reactiveUserById
} = require("../controllers/usersControllers");

const {sendMailRegistered} = require("./nodeMailerHandlers.js")

const loginUserHandler = async (req, res) => {
  const  {email}  = req.body;
    try {
    const results = await getUser(email);
    res.status(200).json(results)
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const registerUserHandler = async (req, res) => {
  const { dni, password, name, email, address, phone } = req.body;
  try {
    const results = await createUser(dni, password, name,  email,address, phone);
    // sendMailRegistered(email)
    res.status(200).json({ results });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const getAllUsersHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const results = name ? await getUserByName(name) : await getAllUsers();
    res.status(200).json({ results });
  } catch (error) {
    res.status(400).json({ error: error });
  }
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
  getAllUsersHandler,
  deleteUserHandler,
  reactiveUserHandler
};
