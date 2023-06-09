const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('product', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
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
        allowNull:true
    },

    image: {
        type:DataTypes.STRING,
        allowNull:false
    },
    
    stock:{
        type: DataTypes.INTEGER,
        default: 0,
    },

    state:{
        type: DataTypes.ENUM("Active", "Inactive"),
        allowNull: false
    }, 

    offer:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false
    }, 

    average_score:{
        type: DataTypes.INTEGER,
        allowNull: true,
        default: null
    }, 

    
});
};