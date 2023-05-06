const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("headersale", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
      allowNull: false
    },
    clientId:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    clientName:{
        type: DataTypes.STRING,
        allowNull:false
    },
    clientAddress:{
        type: DataTypes.STRING,
        allowNull:false
    },
  });
};