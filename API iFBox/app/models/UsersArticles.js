module.exports = (sequelize, DataTypes) => {
    const UserArticles = sequelize.define('users_articles', {
        type: DataTypes.ENUM('AUTOR', 'COAUTOR', 'ORIENTADOR', 'COORIENTADOR', 'BANCA'),
    })

    return UserArticles;
}