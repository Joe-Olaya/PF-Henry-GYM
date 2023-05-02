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

const cleanUserData = (arr) => {
  let data = [];
  if (arr.length > 1) {
    arr.map((el) => {
      data.push({
        dni: el.dni,
        name: el.name,
        email: el.email,
        address: el.address,
        phone: el.phone
      });
    });
  } else {
    data.push({
      dni: arr.dni,
      name: arr.name,
      email: arr.email,
      address: arr.address,
      phone: arr.phone
    });
  }
  console.log(data);
  return data;
};

const getUserByDNI = async (dni, password) => {
  const getUser = await User.findOne({
    where: {
      dni: dni,
    },
  });
  if (getUser) {
    if (getUser.password === password) {
      let arrUser = [];
      arrUser.push({
        dni: getUser.dni,
        name: getUser.name,
        email: getUser.email,
        address: getUser.address,
        phone: getUser.phone
      });
      return arrUser;
    } else {
      return "Contraseña incorrecta";
    }
  } else {
    return "Usuario inexistente";
  }
};

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
    });

    return "Usuario creado exitosamente";
  } else {
    return "El usuario ya existe";
  }
};

module.exports = {
  getUserByDNI,
  createUser,
  getAllUsers,
  getUserByName,
};
