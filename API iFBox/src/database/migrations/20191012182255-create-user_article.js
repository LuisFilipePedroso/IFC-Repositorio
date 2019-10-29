module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('users_articles', {
            type: {
                allowNull: false,
                type: DataTypes.ENUM(
                    'AUTOR',
                    'COAUTOR',
                    'ORIENTADOR',
                    'COORIENTADOR',
                    'BANCA'
                ),
            },
            created_at: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updated_at: {
                allowNull: false,
                type: DataTypes.DATE,
            },
        })
    },

    down: queryInterface => {
        return queryInterface.dropTable('users_articles')
    },
}
