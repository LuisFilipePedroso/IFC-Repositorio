module.exports = (sequelize, DataTypes) => {
    const Article = sequelize.define('articles', {
        title: DataTypes.STRING,
        abstract: DataTypes.STRING,
        altabstract: DataTypes.STRING,
        keywords: DataTypes.STRING,
        tags: DataTypes.STRING,
        year: DataTypes.INTEGER,
        date: DataTypes.DATE,
        language: DataTypes.STRING,
        type: DataTypes.ENUM('ARTIGO_CIENTIFICO', 'TCC'),
        aproved: DataTypes.BOOLEAN,
        url: DataTypes.STRING,
    })

    Article.associate = models => {
        Courses.belongsToMany(models.Course, { through: 'courses_articles' })
    }

    return Article;
}