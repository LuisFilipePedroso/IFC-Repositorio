import Sequelize, { Model } from 'sequelize'

class UserStatistics extends Model {
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
}

export default UserStatistics
