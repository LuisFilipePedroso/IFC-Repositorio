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
}

export default UsersArticles
