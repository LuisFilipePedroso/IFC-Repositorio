class UserController {
    async index(req, res) {
        res.json({ nome: 'test' })
    }

    async show(req, res) {
        const { id } = req.params
        res.json({ param: id })
    }

    async store(req, res) {
        res.json(req.body)
    }

    async update(req, res) {
        res.json(req.body)
    }

    async delete(req, res) {
        const { id } = req.params
        res.json({ param: id })
    }
}

export default new UserController()
