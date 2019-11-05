import Sequelize, { Model } from 'sequelize'

class UsersArticles extends Model {
    static init(sequelize) {
        super.init(
            {
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
        this.belongsToMany(models.Users, { through: 'users_articles' })
        this.belongsToMany(models.Articles, { through: 'users_articles' })
    }
}

export default UsersArticles
