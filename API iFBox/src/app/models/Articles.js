import Sequelize, { Model } from 'sequelize'

class Articles extends Model {
    static init(sequelize) {
        super.init(
            {
                title: Sequelize.STRING,
                abstract: Sequelize.STRING,
                altabstract: Sequelize.STRING,
                keywords: Sequelize.STRING,
                tags: Sequelize.STRING,
                year: Sequelize.INTEGER,
                date: Sequelize.DATE,
                language: Sequelize.STRING,
                type: Sequelize.ENUM('ARTIGO_CIENTIFICO', 'TCC'),
                aproved: Sequelize.BOOLEAN,
                url: Sequelize.STRING,
                event_id: Sequelize.INTEGER,
            },
            {
                sequelize,
            }
        )

        return this
    }

    static associate(models) {
        this.belongsToMany(models.Courses, { through: 'courses_articles' })
        this.belongsToMany(models.Users, { through: 'users_articles' })
        this.hasOne(models.ArticlesStatistics, {
            foreignKey: 'article_id',
        })
        this.hasMany(models.Events, { foreignKey: 'event_id' })
    }
}
export default Articles
