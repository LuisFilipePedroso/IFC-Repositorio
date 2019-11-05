module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.addColumn('courses_articles', 'course_id', {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'courses',
                key: 'id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        })
    },

    down: queryInterface => {
        return queryInterface.removeColumn(
            'courses_articles', // name of the Target model
            'course_id' // key we want to remove
        )
    },
}
