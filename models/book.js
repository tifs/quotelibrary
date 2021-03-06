"use strict";

module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define("Book", {
    title: DataTypes.STRING,
    AuthorId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Book.hasMany(models.Quote);
        Book.belongsTo(models.Author);
      }
    }
  });

  return Book;
};
