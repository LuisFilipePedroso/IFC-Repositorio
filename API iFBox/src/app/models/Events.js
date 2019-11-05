import Sequelize, { Model } from 'sequelize'

class Events extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                year: Sequelize.INTEGER,
                url: Sequelize.STRING,
            },
            {
                sequelize,
            }
        )

        return this
    }

    static associate(models) {
        this.belongsTo(models.Articles, { foreignKey: 'event_id' })
    }
}

export default Events
