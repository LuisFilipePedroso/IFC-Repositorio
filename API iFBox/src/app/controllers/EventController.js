import Events from '../models/Events'

class EventController {
    async index(req, res) {
        const events = await Events.findAll()
        res.json(events)
    }

    async show(req, res) {
        const event = await Events.findByPk(req.params.id)
        res.json(event)
    }

    async findByYear(req, res) {
        const { year } = req.params
        res.json({ param: year })
    }

    async store(req, res) {
        const event = await Events.create(req.body)
        res.json(event)
    }

    async update(req, res) {
        res.json(req.body)
    }

    async delete(req, res) {
        const { id } = req.params
        res.json({ param: id })
    }
}

export default new EventController()
