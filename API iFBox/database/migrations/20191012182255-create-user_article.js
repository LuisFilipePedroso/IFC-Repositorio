'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('users_articles', {
      type: {
        allowNull: false,
        type: DataTypes.ENUM('AUTOR', 'COAUTOR', 'ORIENTADOR', 'COORIENTADOR', 'BANCA'),
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      }
    })
  },

  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable('users_articles')
  }
};
