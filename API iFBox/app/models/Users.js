module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('users', {
        subscription: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        type: DataTypes.ENUM('PROFESSOR', 'ALUNO', 'ADMIN'),
        siape: {
          allowNull: true,
          type: DataTypes.INTEGER,
        },
        lattes: {
            allowNull: true,
            type: DataTypes.STRING,
            length: 500,
        },
        email: DataTypes.STRING,
        birthday: DataTypes.DATE,
        aproved: DataTypes.BOOLEAN,
    })

    User.associate = models => {
        User.belongsToMany(models.Article, { through: 'users_articles' })
        User.belongsTo(models.UserStatistic) 
    }
    return User;
}