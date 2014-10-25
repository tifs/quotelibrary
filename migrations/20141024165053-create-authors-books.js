"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("AuthorsBooks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      AuthorId: {
        type: DataTypes.INTEGER,
        references: "Actors",
        referencesKey: "id"
      },
      BookId: {
        type: DataTypes.INTEGER,
        references: "Books",
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
    migration.dropTable("AuthorsBooks").done(done);
  }
};