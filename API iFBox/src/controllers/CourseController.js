const { courses: Courses } = require('../../app/models')

class CourseController {

  async find(req, res) {
    const courses = await Courses.findAll()
    res.json(courses)
  }

  async findById(req, res) {
    const { id } = req.params
    const courses = await Courses.findByPk(id)
    res.json(courses)
  }

  async create(req, res) {
    const course = await Courses.create(req.body)
    res.json(course)
  }

  async update(req, res) {
    res.json(req.body)
  }

  async destroy(req, res) {
    const { id } = req.params
    res.json({ param: id })
  }
}

module.exports = new CourseController;