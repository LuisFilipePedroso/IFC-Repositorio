import Sequelize, { Model } from 'sequelize'

class ArticlesStatistics extends Model {
    static init(sequelize) {
        super.init(
            {
                views: Sequelize.INTEGER,
                downloads: Sequelize.INTEGER,
            },
            {
                sequelize,
            }
        )

        return this
    }

    static associate(models) {
        this.belongsTo(models.Articles, {
            foreignKey: 'id',
        })
    }
}

export default ArticlesStatistics
