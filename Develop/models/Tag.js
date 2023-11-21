const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    CREATE table Tag (id int NOT NULL AUTO_INCREMENT PRIMARY KEY, name varchar(20) NOT NULL);
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,s
    modelName: 'tag',
  }
);

module.exports = Tag;
