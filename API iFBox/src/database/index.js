import Sequelize from 'sequelize'

import Articles from '../app/models/Articles'
import ArticlesStatistics from '../app/models/ArticlesStatistics'
import Courses from '../app/models/Courses'
import CoursesArticles from '../app/models/CoursesArticles'
import Events from '../app/models/Events'
import Users from '../app/models/Users'
import UsersArticles from '../app/models/UsersArticles'
import UsersStatistics from '../app/models/UsersStatistics'

import databaseConfig from '../config/database'

const models = [
    Articles,
    ArticlesStatistics,
    Courses,
    CoursesArticles,
    Events,
    Users,
    UsersArticles,
    UsersStatistics,
]

class Database {
    constructor() {
        this.init()
    }

    init() {
        this.connection = new Sequelize(databaseConfig)
        models.map(model => model.init(this.connection))
        models.map(
            model => model.associate && model.associate(this.connection.models)
        )
    }
}

export default new Database()
