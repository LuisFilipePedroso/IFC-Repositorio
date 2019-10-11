const express = require('express')
const router = express.Router()
const UserController = require('./controllers/UserController')

//sempre utilizar plural e ingles

router.get('/users', UserController.find)

router.get('/users/:id', UserController.findById)

router.post('/users', UserController.create)

router.put('/users/:id', UserController.update)

router.delete('/users/:id', UserController.destroy)

module.exports = router;

