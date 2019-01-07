const express = require('express')
const router = express.Router()
const barController = require('../controllers/barController')
const commentController = require('../controllers/commentController')
const userController = require('../controllers/userController')

router.get('/', barController.index)

module.exports = router