const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }, 

    dni: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },


    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    phone: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },

    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    userType:{
      type: DataTypes.ENUM("Manager", "Client", "Trainer", "Superadmin"),
      allowNull: false
    },

    state:{
      type: DataTypes.ENUM("Active", "Inactive"),
      allowNull: false
    }


});
};