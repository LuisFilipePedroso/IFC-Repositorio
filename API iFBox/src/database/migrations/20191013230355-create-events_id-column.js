module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.addColumn('articles', 'event_id', {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'events',
                key: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        })
    },

    down: queryInterface => {
        return queryInterface.removeColumn(
            'articles', // name of the Target model
            'event_id' // key we want to remove
        )
    },
}
