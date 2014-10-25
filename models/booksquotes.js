"use strict";

module.exports = function(sequelize, DataTypes) {
  var BooksQuotes = sequelize.define("BooksQuotes", {
    BookId: DataTypes.INTEGER,
    QuoteId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return BooksQuotes;
};
