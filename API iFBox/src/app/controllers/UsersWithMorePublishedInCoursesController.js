import { QueryTypes } from 'sequelize'
import Courses from '../models/Courses'

class UsersWithMorePublishedInCoursesController {
    async index(req, res) {
        const { name = '' } = req.query

        const coursesmoreVisualized = await Courses.sequelize.query(
            `select users.id,
                    users.firstname,
                    users.lastname,
                    count(articles.title) as qty,
                    courses.name
               from users
          inner join users_articles on users.id=users_articles.user_id
          inner join articles on users_articles.article_id = articles.id
          inner join courses_articles on articles.id = courses_articles.article_id
          inner join courses on courses_articles.course_id = courses.id
               where courses.name ilike '%${name}%'
            group by 1, 2, 3, 5
            order by qty desc limit 10;`,
            {
                type: QueryTypes.SELECT,
            }
        )

        return res.json(coursesmoreVisualized)
    }
}

export default new UsersWithMorePublishedInCoursesController()
