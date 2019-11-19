import { QueryTypes } from 'sequelize'
import Courses from '../models/Courses'

class CoursesMoreVisualizedController {
    async index(req, res) {
        const { article_title = '', article_abstract = '' } = req.query

        const coursesmoreVisualized = await Courses.sequelize.query(
            `select courses.name,
                    count(articles.title) as qty
               from articles
         inner join courses_articles on articles.id = courses_articles.article_id
         inner join courses on courses_articles.course_id = courses.id
              where articles.title ilike '%${article_title}%'
                 or articles.abstract ilike '%${article_abstract}%'
           group by courses.name
           order by qty desc limit 10;`,
            {
                type: QueryTypes.SELECT,
            }
        )

        return res.json(coursesmoreVisualized)
    }
}

export default new CoursesMoreVisualizedController()
