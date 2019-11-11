import UsersStatistics from '../models/UsersStatistics'

class UserStatisticsController {
    async store(req, res) {
        const existsStatistics = await UsersStatistics.findOne({
            where: {
                user_id: req.body.user_id,
            },
        })

        if (existsStatistics) {
            req.body.views += existsStatistics.views

            await existsStatistics.update(req.body)

            return res.json(existsStatistics)
        }

        const statistics = await UsersStatistics.create(req.body)
        return res.json(statistics)
    }
}

export default new UserStatisticsController()
