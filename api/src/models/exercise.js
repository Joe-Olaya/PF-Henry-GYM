const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('exercise', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    body_part : {
      type: DataTypes.STRING,
      allowNull: true,
    },
    equipment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gif_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },  
    muscle_target: {
      type: DataTypes.STRING,
      allowNull: true,
    }


});
};