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

    static associate(models) {
        this.belongsToMany(models.Articles, { through: 'courses_articles' })
        // this.hasMany(models.ArticleStatistic)
    }
}

export default Courses
