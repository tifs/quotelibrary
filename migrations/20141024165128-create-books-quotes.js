"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("BooksQuotes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      BookId: {
        type: DataTypes.INTEGER,
        references: "Books",
        referencesKey: "id"
      },
      QuoteId: {
        type: DataTypes.INTEGER,
        references: "Quotes",
        referencesKey: "id"
      },  
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("BooksQuotes").done(done);
  }
};