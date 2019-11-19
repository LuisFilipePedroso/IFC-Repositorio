import { QueryTypes } from 'sequelize'
import Courses from '../models/Courses'

class UsersWithMorePublishedInCoursesController {
    async index(req, res) {
        const usersWithMorePublished = await Courses.sequelize.query(
            `select users.id,
                    users.firstname,
                    users.lastname,
                    count(articles.title) as qty
               from users
         inner join users_articles on users.id = users_articles.user_id
         inner join articles on users_articles.article_id = articles.id
           group by 1, 2, 3
           order by qty desc limit 10`,
            {
                type: QueryTypes.SELECT,
            }
        )

        return res.json(usersWithMorePublished)
    }
}

export default new UsersWithMorePublishedInCoursesController()
