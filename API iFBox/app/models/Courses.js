module.exports = (sequelize, DataTypes) => {
    const Courses = sequelize.define('courses', {
        name: DataTypes.STRING,
    })

    Courses.associate = models => {
        Courses.belongsToMany(models.articles, { through: 'courses_articles' })
        Courses.hasMany(models.articles_statistics)
    }

    return Courses;
}