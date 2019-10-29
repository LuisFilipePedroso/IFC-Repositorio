module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.addColumn('articles', 'event_id', {
            type: DataTypes.INTEGER,
            references: {
                model: 'events',
                key: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        })
    },

    down: (queryInterface, DataTypes) => {
        return queryInterface.removeColumn(
            'articles', // name of the Target model
            'event_id' // key we want to remove
        )
    },
}
