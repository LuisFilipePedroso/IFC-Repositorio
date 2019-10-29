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
}

Events.associate = models => {
    models.hasMany(models.Article)
}

export default Events
