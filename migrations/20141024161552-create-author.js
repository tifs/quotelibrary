"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("Authors", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      firstname: {
        type: DataTypes.STRING
      },
      lastname: {
        type: DataTypes.STRING
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
    migration.dropTable("Authors").done(done);
  }
};