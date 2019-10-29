import Sequelize, { Models } from 'sequelize'

class Users extends Models {
    static init(sequelize) {
        super.init(
            {
                subscription: Sequelize.STRING,
                username: Sequelize.STRING,
                password: Sequelize.STRING,
                firstname: Sequelize.STRING,
                lastname: Sequelize.STRING,
                type: Sequelize.ENUM('PROFESSOR', 'ALUNO', 'ADMIN'),
                siape: {
                    allowNull: true,
                    type: Sequelize.INTEGER,
                },
                lattes: {
                    allowNull: true,
                    type: Sequelize.STRING,
                    length: 500,
                },
                email: Sequelize.STRING,
                birthday: Sequelize.DATE,
                aproved: Sequelize.BOOLEAN,
            },
            {
                sequelize,
            }
        )
    }
}

Users.associate = models => {
    Users.belongsToMany(models.articles, { through: 'users_articles' })
    Users.belongsTo(models.users_statistics)
}
