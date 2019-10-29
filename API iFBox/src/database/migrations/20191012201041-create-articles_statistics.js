module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('articles_statistics', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            views: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            downloads: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            article_id: {
                allowNull: false,
                type: DataTypes.INTEGER,
                references: {
                    model: 'courses',
                    field: 'id',
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
        return queryInterface.dropTable('articles_statistics')
    },
}
