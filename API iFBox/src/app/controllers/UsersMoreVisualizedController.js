import { QueryTypes } from 'sequelize'
import Courses from '../models/Courses'

class UsersMoreVisualizedController {
    async index(req, res) {
        const usersMoreVisualized = await Courses.sequelize.query(
            `select users.id,
                    users.firstname,
                    users.lastname,
                    users_statistics.views
               from users
         inner join users_statistics on users.id = users_statistics.user_id
           order by users_statistics.views desc limit 10`,
            {
                type: QueryTypes.SELECT,
            }
        )

        return res.json(usersMoreVisualized)
    }
}

export default new UsersMoreVisualizedController()
