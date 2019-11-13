import express from 'express'
import UserController from './app/controllers/UserController'
import ArticleController from './app/controllers/ArticleController'
import CourseController from './app/controllers/CourseController'
import EventController from './app/controllers/EventController'
import UserArticlesController from './app/controllers/UserArticlesController'
import UserStatisticsController from './app/controllers/UserStatisticsController'
import CourseArticlesController from './app/controllers/CourseArticlesController'
import ArticleChartViewsController from './app/controllers/ArticleChartViewsController'
import ArticleStatisticsController from './app/controllers/ArticleStatisticsController'
import ArticleByYearController from './app/controllers/ArticleByYearController'

const router = express.Router()

// Users
router.get('/users', UserController.index)
router.get('/users/:id', UserController.show)
router.post('/users', UserController.store)
router.put('/users/:id', UserController.update)
router.delete('/users/:id', UserController.delete)
// UserStatistics
router.post('/users/statistics', UserStatisticsController.store)

// Courses
router.get('/courses', CourseController.index)
router.get('/courses/:id', CourseController.show)
router.post('/courses', CourseController.store)
router.put('/courses/:id', CourseController.update)
router.delete('/courses/:id', CourseController.delete)

// Articles
router.get('/articles', ArticleController.index)
router.get('/articles/:id', ArticleController.show)
router.post('/articles', ArticleController.store)
router.put('/articles/:id', ArticleController.update)
router.delete('/articles/:id', ArticleController.delete)

router.post('/articles/statistics', ArticleStatisticsController.store)

//Charts
router.get('/charts/articles', ArticleChartViewsController.index)
router.get('/charts/articles/years', ArticleByYearController.index)

// Events
router.get('/events', EventController.index)
router.get('/events/:id', EventController.show)
router.get('/events/:year/years', EventController.findByYear)
router.post('/events', EventController.store)
router.put('/events/:id', EventController.update)
router.delete('/events/:id', EventController.delete)

router.get('/usersarticles', UserArticlesController.index)
router.get('/coursesarticles', CourseArticlesController.index)
router.get('/coursesarticles/:id', CourseArticlesController.show)

export default router
