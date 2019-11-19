import * as Yup from 'yup'
import { Op } from 'sequelize'

import Users from '../models/Users'
import UsersStatistics from '../models/UsersStatistics'
import File from '../models/File'

class UserController {
    async index(req, res) {
        const users = await Users.findAll({
            include: [
                {
                    model: UsersStatistics,
                },
                {
                    model: File,
                    attributes: ['name', 'path', 'url'],
                },
            ],
            order: [['id', 'desc']],
        })
        res.json(users)
    }

    async show(req, res) {
        const user = await Users.findByPk(req.params.id)
        res.json(user)
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            registration_id: Yup.string().required(),
            username: Yup.string().required(),
            password: Yup.string()
                .required()
                .min(6),
            firstname: Yup.string().required(),
            lastname: Yup.string().required(),
            type: Yup.string().required(),
            siape: Yup.number().required(),
            lattes: Yup.string().required(),
            email: Yup.string()
                .email()
                .required(),
            birthday: Yup.date().required(),
            aproved: Yup.boolean(),
        })

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({
                error:
                    'Validation fails, please check if you pass all the required fields.',
            })
        }

        const usersExists = await Users.findOne({
            where: {
                [Op.or]: [
                    {
                        username: req.body.username,
                    },
                    {
                        email: req.body.email,
                    },
                ],
            },
        })

        if (usersExists) {
            return res.status(400).json({ error: 'User already exists' })
        }

        const user = await Users.create(req.body)
        res.json(user)
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            registration_id: Yup.string(),
            username: Yup.string(),
            oldPassword: Yup.string().min(6),
            password: Yup.string()
                .min(6)
                .when('oldPassword', (oldPassword, field) =>
                    oldPassword ? field.required() : field
                ),
            confirmPassword: Yup.string().when('password', (password, field) =>
                password ? field.required().oneOf([Yup.ref('password')]) : field
            ),
            firstname: Yup.string(),
            lastname: Yup.string(),
            type: Yup.string(),
            siape: Yup.number(),
            lattes: Yup.string(),
            email: Yup.string().email(),
            birthday: Yup.date(),
            aproved: Yup.boolean(),
        })

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({
                error:
                    'Validation fails, please check if you pass all the required fields.',
            })
        }

        const { email, oldPassword, username } = req.body

        const user = await Users.findByPk(req.params.id)

        if (email !== user.email) {
            const userExists = await Users.findOne({
                where: {
                    email: req.body.email,
                },
            })

            if (userExists) {
                return res.status(400).json({
                    error: {
                        msg: 'User already exists',
                    },
                })
            }
        }

        if (username !== user.username) {
            const userExists = await Users.findOne({
                where: {
                    username: req.body.username,
                },
            })

            if (userExists) {
                return res.status(400).json({
                    error: {
                        msg: 'User already exists',
                    },
                })
            }
        }

        if (oldPassword && !(await user.comparePassword(oldPassword))) {
            return res.status(401).json({ error: 'Password does not match' })
        }

        const updatedUser = await user.update(req.body)

        res.json(updatedUser)
    }

    async delete(req, res) {
        try {
            const user = await Users.findByPk(req.params.id)

            if (!user) {
                return res.status(400).json({ error: 'User does not exists' })
            }

            await user.destroy(req.params.id)
            res.json({ success: 'User was deleted successfully' })
        } catch (e) {
            return res
                .status(400)
                .json({ error: 'Something wrong happened, try again.' })
        }
    }
}

export default new UserController()
