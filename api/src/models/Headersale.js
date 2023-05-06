const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("headersale", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
      allowNull: false
    },
    clientName:{
        type: DataTypes.STRING,
        allowNull:false
    },
    clientAdress:{
        type: DataTypes.STRING,
        allowNull:false
    },
    orderNumber: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  });
};