const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('products', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    }, 
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  
    price: {
        type:DataTypes.FLOAT,
        allowNull:false
    },

    description: {
        type:DataTypes.TEXT,
        allowNull:false
    },

    image: {
        type:DataTypes.STRING,
        allowNull:false
    },

    state:{
        type: DataTypes.ENUM("Active", "Inactive"),
        allowNull: false
      }
    
});
};