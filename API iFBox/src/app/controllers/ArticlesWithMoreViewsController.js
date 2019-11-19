import { QueryTypes } from 'sequelize'
import Articles from '../models/Articles'

class ArticlesWithMoreViewsController {
    async index(req, res) {
        const { title = '', abstract = '' } = req.query

        const articles = await Articles.sequelize.query(
            `select articles.title,
                    articles_statistics.views as views
               from articles
          inner join articles_statistics on articles.id = articles_statistics.article_id
               where articles.title ilike '%${title}%'
                  or articles.abstract ilike '%${abstract}%'
            order by views desc limit 10`,
            {
                type: QueryTypes.SELECT,
            }
        )

        return res.json(articles)
    }
}

export default new ArticlesWithMoreViewsController()
