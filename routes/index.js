const express = require('express')
const router = express.Router()
const appController = require('../controllers/appController')
const barController = require('../controllers/barController')
const commentController = require('../controllers/commentController')
const userController = require('../controllers/userController')

router.get('/', appController.signup)
router.post('/', appController.create)
router.get('/index', appController.index)
router.get('/newbar', appController.new)
router.post('/index', barController.create)
router.get('/:barId', barController.show)

module.exports = router