module.exports = {
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_DATABASE || 'ifbox',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    define: {
        timestamps: true,
        underscored: true,
        underscoredTrue: true,
    },
}
