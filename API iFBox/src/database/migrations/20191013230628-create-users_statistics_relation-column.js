module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.addColumn('users_statistics', 'user_id', {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        })
    },

    down: queryInterface => {
        return queryInterface.removeColumn(
            'users_statistics', // name of the Target model
            'user_id' // key we want to remove
        )
    },
}
