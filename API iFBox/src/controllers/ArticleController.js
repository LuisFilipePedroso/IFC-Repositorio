class ArticleController {

  async find(req, res) {
    res.json({ nome: 'test' })
  }

  async findById(req, res) {
    const { id } = req.params;
    res.json({ param: id })
  }

  async create(req, res) {
    res.json(req.body)
  }

  async update(req, res) {
    res.json(req.body)
  }

  async destroy(req, res) {
    const { id } = req.params
    res.json({ param: id })
  }
}

module.exports = new ArticleController;