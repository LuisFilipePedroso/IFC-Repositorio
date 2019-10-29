import Sequelize from 'sequelize'

import Courses from '../app/models/Courses'
import Events from '../app/models/Events'

import databaseConfig from '../config/database'

const models = [Courses, Events]

class Database {
    constructor() {
        this.init()
    }

    init() {
        this.connection = new Sequelize(databaseConfig)
        models.map(model => model.init(this.connection))
    }
}

export default new Database()
