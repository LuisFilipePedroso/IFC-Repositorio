import * as Yup from 'yup'

import Articles from '../models/Articles'
import ArticlesStatistics from '../models/ArticlesStatistics'
import UsersArticles from '../models/UsersArticles'
import CoursesArticles from '../models/CoursesArticles'

class ArticleController {
    async index(req, res) {
        try {
            const articles = await Articles.findAll({
                attributes: { exclude: ['article_id'] },
                include: [
                    {
                        model: ArticlesStatistics,
                    },
                ],
            })
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
            const schema = Yup.object().shape({
                title: Yup.string().required(),
                abstract: Yup.string().required(),
                altabstract: Yup.string().required(),
                keywords: Yup.string().required(),
                tags: Yup.string(),
                year: Yup.number().required(),
                date: Yup.date().required(),
                language: Yup.string().required(),
                type: Yup.string().required(),
                aproved: Yup.string(),
                url: Yup.string(),
                event_id: Yup.number().required(),
                users_id: Yup.array().required(),
            })

            if (!(await schema.isValid(req.body))) {
                return res.status(400).json({
                    error:
                        'Validation fails, please check if you pass all the required fields.',
                })
            }

            const article = await Articles.create(req.body)

            req.body.users_id.map(async user => {
                await UsersArticles.create({
                    user_id: user,
                    article_id: article.id,
                    type: req.body.user_article_type,
                })
            })

            req.body.courses_id.map(async course => {
                await CoursesArticles.create({
                    course_id: course,
                    article_id: article.id,
                })
            })

            return res.json(article)
        } catch (e) {
            return res
                .status(401)
                .json({ msg: `Algo de errado aconteceu: ${e}` })
        }
    }

    async update(req, res) {
        try {
            const schema = Yup.object().shape({
                title: Yup.string(),
                abstract: Yup.string(),
                altabstract: Yup.string(),
                keywords: Yup.string(),
                tags: Yup.string(),
                year: Yup.number(),
                date: Yup.date(),
                language: Yup.string(),
                type: Yup.string(),
                aproved: Yup.string(),
                url: Yup.string(),
                event_id: Yup.number(),
                users_id: Yup.array(),
            })

            if (!(await schema.isValid(req.body))) {
                return res.status(400).json({
                    error:
                        'Validation fails, please check if you pass all the required fields.',
                })
            }

            const article = await Articles.findByPk(req.params.id)
            const articleUpdate = await article.update(req.body)

            await UsersArticles.destroy({
                where: {
                    article_id: article.id,
                },
            })

            req.body.users_id.map(async user => {
                await UsersArticles.create({
                    user_id: user,
                    article_id: article.id,
                    type: req.body.user_article_type,
                })
            })

            await CoursesArticles.destroy({
                where: {
                    article_id: article.id,
                },
            })

            req.body.courses_id.map(async course => {
                await CoursesArticles.create({
                    course_id: course,
                    article_id: article.id,
                })
            })

            return res.json(articleUpdate)
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
