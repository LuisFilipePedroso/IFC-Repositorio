module.exports = (sequelize, DataTypes) => {
    const ArticleStatistic = sequelize.define('articles_statistics', {
        views: DataTypes.INTEGER,
        downloads: DataTypes.INTEGER,
    })

    return ArticleStatistic;
}