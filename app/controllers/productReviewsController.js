const productReviews = require('../models/productReviews')
const productReviewsController = {}

productReviewsController.listAll = (req, res) => {
    productReviews.find()
        .then((prod) => {
            res.json(prod)
        })
}

productReviewsController.myProductReviews = (req, res) => {
    productReviews.find({ userId: req.userId })
        .then((prod) => {
            res.json(prod)
        })
}

productReviewsController.show = (req, res) => {
    const id = req.params.id 
    productReviews.findOne(id)
        .then((prod) => {
            res.json(prod)
        })
}


productReviewsController.create = (req, res) => {
    const body = req.body 
    const prod = new productReviews(body) 
    // assigning the user id to the message
    prod.userId = req.userId 
    prod.save()
        .then((prod) => {
            res.json(prod)
        })
        .catch((err) => {
            res.json(err)
        })
}

// update 
productReviewsController.update = (req, res) => {
    const id = req.params.id 
    const body = req.body 
    productReviews.findOneAndUpdate({ _id: id, userId: req.userId}, body, { new: true, runValidators: true} )
        .then((prod) => {
            if(prod) {
                res.json(prod)
            } else {
                res.json({})
            }
        })
}

// destroy
productReviewsController.destroy = (req, res) => {
    const id = req.params.id 
    productReviews.findOneAndDelete({ _id: id, userId: req.userId })
        .then((prod) => {
            if(prod) {
                res.json(prod)
            } else {
                res.json({})
            }
            
        })
}

module.exports = productReviewsController