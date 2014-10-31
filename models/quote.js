"use strict";

module.exports = function(sequelize, DataTypes) {
  var Quote = sequelize.define("Quote", {
    text: DataTypes.TEXT,
    BookId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Quote.belongsTo(models.Book);
      }
    }
  });

  return Quote;
};
