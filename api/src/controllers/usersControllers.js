const { User } = require("../db");

const getAllUsers = async () => {
  const allUsers = await User.findAll();
  const cleanData = cleanUserData(allUsers);
  return cleanData;
};

const getUserByName = async (name) => {
  const user = await User.findAll();
  const cleanData = cleanUserData(user);
  const userFiltered = cleanData.filter((d) =>
    d.name.toLowerCase().includes(name.toLowerCase())
  );
  return userFiltered;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);
  return user
}

const cleanUserData = (arr) => {
  let data = [];
    arr.map((el) => {
      data.push({
        dni: el.dni,
        name: el.name,
        email: el.email,
        address: el.address,
        phone: el.phone,
        state: el.state
      });
    });
  return data;
};

const getUser = async (email) => {
  try {
    const getUser = await User.findOrCreate({
      where: {
        email: email,
      },
      defaults: {
        userType: 'Client',
        state: 'Active',
      }
    });
    return getUser
  } catch (error) {
    return error
  }
};

const deleteUserById = async (id) => {
  const inactiveUserById = await User.update({
    state : 'Inactive'
  },{
    where: {id:id}
  })
  return 'Usuario dado de baja correctamente'
}

const reactiveUserById = async (id) => {
  const activeUserById = await User.update({
    state : 'Active'
  },{
    where: {id:id}
  })
  return 'Usuario reactivado correctamente'
}

const createUser = async (dni, password, name, email, address, phone) => {
  const oldUser = await getUserByDNI(dni);

  if (oldUser === "Usuario inexistente") {
    const newUser = await User.create({
      dni: dni,
      password: password,
      name: name,
      email: email,
      address: address,
      phone: phone,
      userType: "Client",
      state: "Active"
    });

    return "Usuario creado exitosamente";
  } else {
    return "El usuario ya existe";
  }
};
// createUser(37772,"321546","awdawd","joawd@aowdmaw.com","asdaw adw 123",341548)
module.exports = {
  getUser,
  createUser,
  getAllUsers,
  getUserByName,
  deleteUserById,
  reactiveUserById,
  getUserById
};
