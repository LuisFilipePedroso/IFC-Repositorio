import Sequelize, { Model } from 'sequelize'

class CoursesArticles extends Model {
    static init(sequelize) {
        super.init(
            {
                course_id: Sequelize.INTEGER,
                article_id: Sequelize.INTEGER,
            },
            {
                sequelize,
            }
        )

        return this
    }

    static associate(models) {
        this.belongsToMany(models.Courses, {
            through: 'courses_articles',
            foreignKey: 'course_id',
        })
        this.belongsToMany(models.Articles, {
            through: 'courses_articles',
            foreignKey: 'article_id',
        })
    }
}

export default CoursesArticles
