import Sequelize, { Model } from 'sequelize'

class UsersArticles extends Model {
    static init(sequelize) {
        super.init(
            {
                user_id: Sequelize.INTEGER,
                article_id: Sequelize.INTEGER,
                type: Sequelize.ENUM(
                    'AUTOR',
                    'COAUTOR',
                    'ORIENTADOR',
                    'COORIENTADOR',
                    'BANCA'
                ),
            },
            {
                sequelize,
            }
        )

        return this
    }

    static associate(models) {
        this.belongsToMany(models.Users, {
            through: 'users_articles',
            foreignKey: 'user_id',
        })
        this.belongsToMany(models.Articles, {
            through: 'users_articles',
            foreignKey: 'article_id',
        })
    }
}

export default UsersArticles
