const express = require('express')
const router = express.Router()
const orderController = require('../controllers/orderController')

router.get('/', orderController.index)
router.get('/:id', orderController.show)
router.get('/user/:userid', orderController.getOrdersbyUserid)

router.get('/create', orderController.create)
router.post("/", orderController.store);


router.post('/:id', orderController.addtoOrder)

router.put('/:id', orderController.edit)
router.patch('/:id', orderController.update)
router.destroy('/:id', orderController.destroy)

module.exports = router