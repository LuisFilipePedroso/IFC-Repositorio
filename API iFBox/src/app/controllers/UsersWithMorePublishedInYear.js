import { QueryTypes } from 'sequelize'
import Courses from '../models/Courses'

class UsersWithMorePublishedInYear {
    async index(req, res) {
        const { name = '' } = req.query

        const usersWithMorePublishedInYear = await Courses.sequelize.query(
            `select articles.year,
                    count(articles.title) as qty,
                    users.firstname || ' ' || users.lastname as name
               from articles
         inner join users_articles on articles.id = users_articles.article_id
         inner join users on users_articles.user_id = users.id
              where users.firstname ilike '%${name}%'
           group by articles.year, name
           order by articles.year`,
            {
                type: QueryTypes.SELECT,
            }
        )

        return res.json(usersWithMorePublishedInYear)
    }
}

export default new UsersWithMorePublishedInYear()
