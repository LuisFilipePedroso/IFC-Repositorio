module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('courses_articles', {
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
