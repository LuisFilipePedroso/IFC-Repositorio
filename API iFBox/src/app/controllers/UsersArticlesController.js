import Users from '../models/Users'
import Articles from '../models/Articles'
import UsersArticles from '../models/UsersArticles'

class UsersArticlesController {
    async index(req, res) {
        const usersArticles = await UsersArticles.findAll({
            include: [
                {
                    model: Users,
                    attributes: { include: ['username'], exclude: ['user_id'] },
                },
                {
                    model: Articles,
                },
            ],
        })
        return res.json(usersArticles)
    }
}

export default new UsersArticlesController()
