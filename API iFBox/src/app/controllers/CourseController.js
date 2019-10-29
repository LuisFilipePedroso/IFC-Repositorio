import Courses from '../models/Courses'

class CourseController {
    async index(req, res) {
        try {
            const courses = await Courses.findAll()
            return res.json(courses)
        } catch (e) {
            return res
                .status(401)
                .json({ msg: `Algo de errado aconteceu: ${e}` })
        }
    }

    async show(req, res) {
        try {
            const { id } = req.params
            const courses = await Courses.findByPk(id)
            return res.json(courses)
        } catch (e) {
            return res
                .status(401)
                .json({ msg: `Algo de errado aconteceu: ${e}` })
        }
    }

    async store(req, res) {
        try {
            const course = await Courses.create(req.body)
            return res.json(course)
        } catch (e) {
            return res
                .status(401)
                .json({ msg: `Algo de errado aconteceu: ${e}` })
        }
    }

    async update(req, res) {
        try {
            const course = await Courses.update(req.body)
            return res.json(course)
        } catch (e) {
            return res
                .status(401)
                .json({ msg: `Algo de errado aconteceu: ${e}` })
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params
            await Courses.destroy({
                where: {
                    id,
                },
            })
            return res.json({ msg: 'SUCCESS' })
        } catch (e) {
            return res
                .status(401)
                .json({ msg: `Algo de errado aconteceu: ${e}` })
        }
    }
}

export default new CourseController()
