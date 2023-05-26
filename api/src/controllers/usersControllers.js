const { User } = require("../db");
const { Op } = require("sequelize");

const getUsers = async (name, userType, state, dni, page, orderBy, order, res) => {
  let filterOps = {
    [Op.and]: [
      name ? {name: { [Op.iLike]: `${name}%` }} : {},
      dni ? {dni: { [Op.like]: `${dni}%`}} : {},
      userType ? { userType } : {},
      state ? { state } : {},
    ],
  };
  
  let options = {
    where: filterOps,
    order: [[`${orderBy}`, `${order}`]],
    limit: 10,
    offset: +page * 10,
  };

  try {
    const { count, rows } = await User.findAndCountAll(options);
    res.status(200).send({
      users: rows,
      actual_page: ++page,
      total_users: count,
      total_pages : Math.ceil(count / 10)
    });
  } catch (error) {
    res.status(500).send(error);
  }
}

const getUserById = async (id) => {
  const user = await User.findByPk(id);
  return user
}

const cleanUserData = (arr) => {
  let data = [];
    arr.map((el) => {
      data.push({
        id: el.id,
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

const getUserByEmail = async (email) => {
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
  return 'User terminated successfully'
}

const reactiveUserById = async (id) => {
  const activeUserById = await User.update({
    state : 'Active'
  },{
    where: {id:id}
  })
  return 'User reactivated successfully'
}

const createOrUpdateUser = async (dni, name, email, address, phone) => {
  const user = await User.findOne({
    where: {email:email}
  })
  user.name = name
  user.dni = dni
  user.address = address
  user.phone = phone

  await user.save()
  return user
};
// createUser(37772,"321546","awdawd","joawd@aowdmaw.com","asdaw adw 123",341548)
module.exports = {
  getUserByEmail,
  createOrUpdateUser,
  getUsers,
  deleteUserById,
  reactiveUserById,
  getUserById
};
