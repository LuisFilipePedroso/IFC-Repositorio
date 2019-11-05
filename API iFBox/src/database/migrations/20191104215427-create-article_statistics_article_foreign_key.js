module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.addColumn('articles_statistics', 'article_id', {
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
            'articles_statistics', // name of the Target model
            'article_id' // key we want to remove
        )
    },
}
