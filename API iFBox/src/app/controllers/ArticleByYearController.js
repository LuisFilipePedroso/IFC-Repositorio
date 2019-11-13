import { fn, col } from 'sequelize'
import Articles from '../models/Articles'

class ArticleByYearController {
    async index(req, res) {
        const articlesByYear = await Articles.findAll({
            attributes: ['year', [fn('COUNT', col('year')), 'qtYear']],
            group: ['year'],
        })

        return res.json(articlesByYear)
    }
}

export default new ArticleByYearController()
