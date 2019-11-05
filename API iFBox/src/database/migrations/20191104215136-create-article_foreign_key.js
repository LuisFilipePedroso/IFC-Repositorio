module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.addColumn('courses_articles', 'article_id', {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'articles',
                key: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        })
    },

    down: queryInterface => {
        return queryInterface.removeColumn(
            'courses_articles', // name of the Target model
            'article_id' // key we want to remove
        )
    },
}
