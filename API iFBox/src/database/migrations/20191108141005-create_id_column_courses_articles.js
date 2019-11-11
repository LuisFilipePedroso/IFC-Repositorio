module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.addColumn('courses_articles', 'id', {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        })
    },

    down: queryInterface => {
        return queryInterface.removeColumn(
            'courses_articles', // name of the Target model
            'id' // key we want to remove
        )
    },
}
