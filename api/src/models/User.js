const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('User', {

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    }, 

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },


    adress: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    userType:{
      type: DataTypes.ENUM("Manager", "Client"),
      allowNull: true
    }


});
};