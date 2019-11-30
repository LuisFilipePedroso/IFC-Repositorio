import { QueryTypes } from 'sequelize'
import Courses from '../models/Courses'

class CoursesPublishedByYearController {
    async index(req, res) {
        const { name = '' } = req.query

        const coursesmoreVisualized = await Courses.sequelize.query(
            `select articles.year,
                    count(articles.title) as qty,
                    courses.name
               from articles
         inner join courses_articles on articles.id = courses_articles.article_id
         inner join courses on courses_articles.course_id = courses.id
              where courses.name ilike '%${name}%'
           group by articles.year, courses.name
           order by articles.year`,
            {
                type: QueryTypes.SELECT,
            }
        )

        return res.json(coursesmoreVisualized)
    }
}

export default new CoursesPublishedByYearController()
