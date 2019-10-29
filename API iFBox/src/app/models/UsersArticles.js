import Sequelize, { Models } from 'sequelize'

class UsersArticles extends Models {
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
    }
}

export default UsersArticles
