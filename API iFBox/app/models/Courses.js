module.exports = (sequelize, DataTypes) => {
    const Courses = sequelize.define('courses', {
        name: DataTypes.STRING,
    })

    Courses.associate = models => {
        Courses.belongsToMany(models.Article, { through: 'courses_articles' })
        Courses.hasMany(models.ArticleStatistic)
    }

    return Courses;
}