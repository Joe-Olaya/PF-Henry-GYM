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
        adress: el.adress,
      });
    });
  } else {
    data.push({
      dni: arr.dni,
      name: arr.name,
      email: arr.email,
      adress: arr.adress,
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
        adress: getUser.adress,
      });
      return arrUser;
    } else {
      return "Contraseña incorrecta";
    }
  } else {
    return "Usuario inexistente";
  }
};

const createUser = async (dni, password, name, email, adress) => {
  const oldUser = await getUserByDNI(dni);

  if (oldUser === "Usuario inexistente") {
    const newUser = await User.create({
      dni: dni,
      password: password,
      name: name,
      email: email,
      adress: adress,
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
