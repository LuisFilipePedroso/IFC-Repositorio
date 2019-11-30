import { QueryTypes } from 'sequelize'
import db from '../../database'

class TopTagsUsedInArticlesController {
    async index(req, res) {
        const { title = '', abstract = '' } = req.query

        const topTagsUsedInArticles = await db.connection.query(
            `select tags.name, count(tags.name) as qty
               from (
                    select tags.name
                      from articles, unnest(string_to_array(articles.keywords, ',')) tags(name)
                     where lower(articles.title) like '%${title}%' or lower(articles.abstract) like '%${abstract}%'
                 union all
                    select tags.name
                      from articles, unnest(string_to_array(articles.tags, ',')) tags(name)
                     where lower(articles.title) like '%${title}%' or lower(articles.abstract) like '%${abstract}%'
                ) as tags
            group by tags.name
            order by qty desc limit 10`,
            {
                type: QueryTypes.SELECT,
            }
        )

        return res.json(topTagsUsedInArticles)
    }
}

export default new TopTagsUsedInArticlesController()
