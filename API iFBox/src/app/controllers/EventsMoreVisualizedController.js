import { QueryTypes } from 'sequelize'
import Courses from '../models/Courses'

class EventsMoreVisualizedController {
    async index(req, res) {
        const usersMoreVisualized = await Courses.sequelize.query(
            `select events.id,
                    events.name,
                    count(events.id) as qty
               from events
         inner join articles on articles.event_id = events.id
           group by events.id
           order by qty desc
              limit 10`,
            {
                type: QueryTypes.SELECT,
            }
        )

        return res.json(usersMoreVisualized)
    }
}

export default new EventsMoreVisualizedController()
