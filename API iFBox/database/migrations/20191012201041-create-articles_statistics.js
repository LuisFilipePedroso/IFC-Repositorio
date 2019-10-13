'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('articles_statistics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      views: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      downloads: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      article_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'courses',
          field: 'id'
        }
      }
    })
  },

  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable('articles_statistics')
  }
};
