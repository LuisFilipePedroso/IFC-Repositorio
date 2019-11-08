import Courses from '../models/Courses'
import Articles from '../models/Articles'
import CoursesArticles from '../models/CoursesArticles'

class CourseArticlesController {
    async index(req, res) {
        const coursesArticles = await CoursesArticles.findAll({
            include: [
                {
                    model: Courses,
                    required: true,
                },
                {
                    model: Articles,
                    required: true,
                },
            ],
        })
        return res.json(coursesArticles)
    }

    async show(req, res) {
        const coursesArticles = await CoursesArticles.findAll({
            include: [
                {
                    model: Courses,
                    required: true,
                },
                {
                    model: Articles,
                    required: true,
                },
            ],
            where: {
                id: req.params.id,
            },
        })
        return res.json(coursesArticles)
    }
}

export default new CourseArticlesController()
