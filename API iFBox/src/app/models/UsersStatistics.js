import Sequelize, { Models } from 'sequelize'

class UserStatistics extends Models {
    static init(sequelize) {
        super.init(
            {
                views: Sequelize.INTEGER,
            },
            {
                sequelize,
            }
        )
    }
}

export default UserStatistics
