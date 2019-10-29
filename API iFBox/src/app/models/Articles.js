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
            },
            {
                sequelize,
            }
        )

        return this
    }
}

Articles.associate = models => {
    Articles.belongsToMany(models.courses, { through: 'courses_articles' })
}

export default Articles
