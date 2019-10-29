import Sequelize, { Model } from 'sequelize'

class ArticleStatistic extends Model {
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
    }
}

export default ArticleStatistic
