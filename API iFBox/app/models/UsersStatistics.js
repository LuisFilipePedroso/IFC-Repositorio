module.exports = (sequelize, DataTypes) => {
    const UserStatistic = sequelize.define('users_statistics', {
        views: DataTypes.INTEGER,
    })

    return UserStatistic;
}