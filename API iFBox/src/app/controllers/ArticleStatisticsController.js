import ArticlesStatistics from '../models/ArticlesStatistics'

class ArticleStatisticsController {
    async store(req, res) {
        const existsStatistics = await ArticlesStatistics.findOne({
            where: {
                article_id: req.body.article_id,
            },
        })

        if (existsStatistics) {
            req.body.views += existsStatistics.views
            req.body.downloads += existsStatistics.downloads

            await existsStatistics.update(req.body)

            return res.json(existsStatistics)
        }

        const statistics = await ArticlesStatistics.create(req.body)
        return res.json(statistics)
    }
}

export default new ArticleStatisticsController()
