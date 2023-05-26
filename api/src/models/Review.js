const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('review', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        punctuation:{
            type: DataTypes.ENUM("0","1","2","3","4","5"),
            allowNull: true
        },
        review:{
            type: DataTypes.TEXT,
            allowNull:false
        },
    })
}