const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('bodysale', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        units:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price:{
            type: DataTypes.FLOAT,
            allowNull:false
        },
    })
}