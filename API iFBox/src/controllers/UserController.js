class UserController {

  async find(req, res) {
    res.send('Ola')
  }

  async findById(req, res) {
    const { id } = req.params
    res.send(id)
  }

  async create(req, res) {

  }

  async update(req, res) {

  }

  async destroy(req, res) {

  }
}

module.exports = new UserController()