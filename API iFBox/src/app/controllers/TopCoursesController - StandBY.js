import { fn, col } from 'sequelize'
import Articles from '../models/Articles'
import Courses from '../models/Courses'
import CoursesArticles from '../models/CoursesArticles'

class TopCoursesController {
    async index(req, res) {
        const articlesByYear = await Articles.findAll({
            attributes: ['year', [fn('COUNT', col('year')), 'qtYear']],
            include: [
                {
                    model: CoursesArticles,
                    include: [
                        {
                            model: Courses,
                        },
                    ],
                },
            ],
            group: ['year'],
        })

        return res.json(articlesByYear)
    }
}

export default new TopCoursesController()
