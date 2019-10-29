import bcrypt from 'bcryptjs'
import Sequelize, { Model } from 'sequelize'

class Users extends Model {
    static init(sequelize) {
        super.init(
            {
                registration_id: Sequelize.STRING,
                username: {
                    type: Sequelize.STRING,
                    unique: true,
                },
                password: Sequelize.VIRTUAL,
                password_hash: Sequelize.STRING,
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
                email: {
                    type: Sequelize.STRING,
                    unique: true,
                },
                birthday: Sequelize.DATE,
                aproved: {
                    type: Sequelize.BOOLEAN,
                    allowNull: true,
                },
            },
            {
                sequelize,
            }
        )

        this.addHook('beforeSave', async user => {
            if (user.password) {
                user.password_hash = await bcrypt.hash(user.password, 8)
            }
        })

        return this
    }

    comparePassword(password) {
        return bcrypt.compare(password, this.password_hash)
    }
}

Users.associate = models => {
    Users.belongsToMany(models.articles, { through: 'users_articles' })
    Users.belongsTo(models.users_statistics)
}

export default Users
