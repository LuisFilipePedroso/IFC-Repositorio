import { col, Op } from 'sequelize'
import Articles from '../models/Articles'
import ArticlesStatistics from '../models/ArticlesStatistics'

class ArticleChartViewsController {
    async index(req, res) {
        const { title = '', abstract = '' } = req.query

        const articles = await Articles.findAll({
            attributes: { exclude: ['article_id'] },
            include: [
                {
                    model: ArticlesStatistics,
                    required: true,
                },
            ],
            where: {
                [Op.or]: {
                    title: title && {
                        [Op.iLike]: `%${title}%`,
                    },
                    abstract: abstract && {
                        [Op.iLike]: `%${abstract}%`,
                    },
                },
            },
            order: [[col('ArticlesStatistic.views'), 'DESC']],
            limit: 10,
        })

        return res.json(articles)
    }
}

export default new ArticleChartViewsController()
