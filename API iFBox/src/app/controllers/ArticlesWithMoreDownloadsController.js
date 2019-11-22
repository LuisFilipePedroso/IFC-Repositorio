import { QueryTypes } from 'sequelize'
import Articles from '../models/Articles'

class ArticlesWithMoreDownloadsController {
    async index(req, res) {
        const { title = '' } = req.query

        const articles = await Articles.sequelize.query(
            `select articles.title,
                    articles_statistics.downloads as downloads
               from articles
          inner join articles_statistics on articles.id = articles_statistics.article_id
               where articles.title ilike '%${title}%'
            order by downloads desc limit 10`,
            {
                type: QueryTypes.SELECT,
            }
        )

        return res.json(articles)
    }
}

export default new ArticlesWithMoreDownloadsController()
