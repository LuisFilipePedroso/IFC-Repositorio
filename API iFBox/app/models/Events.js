module.exports = (sequelize, DataTypes) => {

    const Event = sequelize.define('events', {
        name: DataTypes.STRING,
        year: DataTypes.INTEGER,
        url: DataTypes.STRING,
    })

    Event.associate = models => {
        models.hasMany(models.Article)
    }
}