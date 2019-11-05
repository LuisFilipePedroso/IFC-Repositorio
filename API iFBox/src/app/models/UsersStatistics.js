import Sequelize, { Model } from 'sequelize'

class UsersStatistics extends Model {
    static init(sequelize) {
        super.init(
            {
                views: Sequelize.INTEGER,
            },
            {
                sequelize,
            }
        )

        return this
    }

    static associate(models) {
        this.belongsTo(models.Users, { foreignKey: 'user_id' })
    }
}

export default UsersStatistics
