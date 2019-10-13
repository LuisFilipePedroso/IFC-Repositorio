'use strict'

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('users', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        subscription: {
          allowNull: true,
          type: DataTypes.STRING,
        },
        username: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        password: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        firstname: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        lastname: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        type: {
          allowNull: false,
          type: DataTypes.ENUM('PROFESSOR', 'ALUNO', 'ADMIN'),
        },
        siape: {
          allowNull: true,
          type: DataTypes.INTEGER,
        },
        lattes: {
          allowNull: true,
          type: DataTypes.STRING,
          length: 500,
        },
        email: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        birthday: {
          allowNull: false,
          type: DataTypes.DATE,
        },
        aproved: {
          allowNull: false,
          type: DataTypes.BOOLEAN,
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
          default: false,
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
      })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('users')
  }
}
