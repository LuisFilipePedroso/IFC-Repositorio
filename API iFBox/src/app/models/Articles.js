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
                users_id: Sequelize.VIRTUAL,
                user_article_type: Sequelize.VIRTUAL,
                courses_id: Sequelize.VIRTUAL,
            },
            {
                sequelize,
            }
        )

        return this
    }

    static associate(models) {
        this.hasOne(models.ArticlesStatistics, {
            foreignKey: 'article_id',
        })
        this.belongsTo(models.Events, { foreignKey: 'event_id' })
        this.belongsTo(models.File, { foreignKey: 'file_id' })
    }
}
export default Articles
