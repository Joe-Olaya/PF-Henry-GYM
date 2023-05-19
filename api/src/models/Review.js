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
            type: DataTypes.ENUM("1","2","3","4","5"),
            allowNull: false
        },
        review:{
            type: DataTypes.TEXT,
            allowNull:false
        },
    })
}