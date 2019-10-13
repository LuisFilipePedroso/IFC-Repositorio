'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('articles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      abstract: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      altabstract: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      keywords: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      tags: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      year: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      date: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      language: {
        allowNull: false,
        type: DataTypes.STRING,
        length: 5,
      },
      type: {
        allowNull: false,
        type: DataTypes.ENUM('ARTIGO_CIENTIFICO', 'TCC'),
      },
      aproved: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        default: false,
      },
      url: {
        allowNull: true,
        type: DataTypes.STRING,
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
    return queryInterface.dropTable('articles')
  }
};
