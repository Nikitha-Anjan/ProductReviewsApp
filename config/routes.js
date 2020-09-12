const express = require('express')
const router = express.Router() 
const usersController = require('../app/controllers/usersController')
const productReviewsController = require('../app/controllers/productReviewsController')
const { authenticateUser  } = require('../app/middlewares/authentication')

router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)

// private route
router.get('/users/account', authenticateUser ,usersController.account)
router.get('/productReviews', authenticateUser, productReviewsController.listAll)
router.get('/productReviews/my', authenticateUser, productReviewsController.myProductReviews)
router.post('/productReviews', authenticateUser, productReviewsController.create )
router.get('/productReviews/:id', authenticateUser, productReviewsController.show)
router.put('/productReviews/:id', authenticateUser, productReviewsController.update)
router.delete('/productReviews/:id', authenticateUser, productReviewsController.destroy)

module.exports = router
