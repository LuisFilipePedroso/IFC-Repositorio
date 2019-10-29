module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface
            .addColumn('users_articles', 'user_id', {
                type: DataTypes.INTEGER,
                references: {
                    model: 'users',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            })
            .then(() => {
                queryInterface.addColumn('users_articles', 'article_id', {
                    type: DataTypes.INTEGER,
                    references: {
                        model: 'articles',
                        key: 'id',
                    },
                    onDelete: 'cascade',
                    onUpdate: 'cascade',
                })
            })
    },

    down: (queryInterface, DataTypes) => {
        return queryInterface
            .removeColumn('users_articles', 'user_id')
            .then(() => {
                return queryInterface.removeColumn(
                    'users_articles', // name of the Target model
                    'article_id' // key we want to remove
                )
            })
    },
}
