const express = require('express')
const router = express.Router()
const UserController = require('./controllers/UserController')
const ArticleController = require('./controllers/ArticleController')
const CourseController = require('./controllers/CourseController')
const EventController = require('./controllers/EventController')

// Users
router.get('/users', UserController.find)
router.get('/users/:id', UserController.findById)
router.post('/users', UserController.create)
router.put('/users/:id', UserController.update)
router.delete('/users/:id', UserController.destroy)

// Courses
router.get('/courses', CourseController.find)
router.get('/courses/:id', CourseController.findById)
router.post('/courses', CourseController.create)
router.put('/courses/:id', CourseController.update)
router.delete('/courses/:id', CourseController.destroy)

// Articles
router.get('/articles', ArticleController.find)
router.get('/articles/:id', ArticleController.findById)
router.post('/articles', ArticleController.create)
router.put('/articles/:id', ArticleController.update)
router.delete('/articles/:id', ArticleController.destroy)

// Events
router.get('/events', EventController.find)
router.get('/events/:id', EventController.findById)
router.get('/events/:year/years', EventController.findByYear)
router.post('/events', EventController.create)
router.put('/events/:id', EventController.update)
router.delete('/events/:id', EventController.destroy)

module.exports = router;

