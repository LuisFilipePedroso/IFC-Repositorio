import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'
import routes from './routes'
import './database'

class App {
    constructor() {
        this.server = express()

        this.middlewares()
        this.routes()
        dotenv.config()
    }

    middlewares() {
        this.server.use(express.json())
        this.server.use(cors())
        this.server.use(
            '/files',
            express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
        )
    }

    routes() {
        this.server.use(routes)
    }
}

export default new App().server
