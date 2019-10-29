import Sequelize, { Model } from 'sequelize'

class Courses extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
            },
            {
                sequelize,
            }
        )

        return this
    }
}

Courses.associate = models => {
    Courses.belongsToMany(models.articles, { through: 'courses_articles' })
    Courses.hasMany(models.articles_statistics)
}

export default Courses
