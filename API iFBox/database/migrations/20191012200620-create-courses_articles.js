'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('courses_articles', {
      course_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'courses',
          key: 'id'
        }
      },
      article_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'articles',
          key: 'id'
        }
      }
    })
  },

  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable('courses_articles')
  }
};
