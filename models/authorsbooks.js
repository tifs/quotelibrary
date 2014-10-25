"use strict";

module.exports = function(sequelize, DataTypes) {
  var AuthorsBooks = sequelize.define("AuthorsBooks", {
    AuthorId: DataTypes.INTEGER,
    BookId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return AuthorsBooks;
};
