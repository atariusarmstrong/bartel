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

router.get('/myprofile', userController.index)

router.get('/:barId/comments', commentController.index)
router.post('/:barId/comments', commentController.create)
router.delete('/:barId/comments/:id', commentController.delete)

router.post('/index', barController.create)
router.get('/:barId', barController.show)
router.get('/:barId/edit', barController.edit)
router.patch('/:barId', barController.update)
router.delete('/:barId', barController.delete)



module.exports = router