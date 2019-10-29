import Articles from '../models/Articles'

class ArticleController {
    async index(req, res) {
        try {
            const articles = await Articles.findAll()
            return res.json(articles)
        } catch (e) {
            return res
                .status(401)
                .json({ msg: `Algo de errado aconteceu: ${e}` })
        }
    }

    async show(req, res) {
        try {
            const { id } = req.params
            const articles = await Articles.findByPk(id)
            return res.json(articles)
        } catch (e) {
            return res
                .status(401)
                .json({ msg: `Algo de errado aconteceu: ${e}` })
        }
    }

    async store(req, res) {
        try {
            const article = await Articles.create(req.body)
            return res.json(article)
        } catch (e) {
            return res
                .status(401)
                .json({ msg: `Algo de errado aconteceu: ${e}` })
        }
    }

    async update(req, res) {
        try {
            const article = await Articles.update(req.body)
            return res.json(article)
        } catch (e) {
            return res
                .status(401)
                .json({ msg: `Algo de errado aconteceu: ${e}` })
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params
            return res.json({ param: id })
        } catch (e) {
            return res
                .status(401)
                .json({ msg: `Algo de errado aconteceu: ${e}` })
        }
    }
}

export default new ArticleController()
