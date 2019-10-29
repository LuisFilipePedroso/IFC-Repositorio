module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('courses_articles', {
            course_id: {
                allowNull: false,
                type: DataTypes.INTEGER,
                references: {
                    model: 'courses',
                    key: 'id',
                },
            },
            article_id: {
                allowNull: false,
                type: DataTypes.INTEGER,
                references: {
                    model: 'articles',
                    key: 'id',
                },
                onDelete: 'cascade',
                onUpdate: 'cascade',
            },
            created_at: {
                allowNull: false,
                type: DataTypes.DATE,
                default: false,
            },
            updated_at: {
                allowNull: false,
                type: DataTypes.DATE,
            },
        })
    },

    down: queryInterface => {
        return queryInterface.dropTable('courses_articles')
    },
}
