const express = require('express')
const router = express.Router()
const orderController = require('../controllers/orderController')
const auth = require("../middlewares/checkAuth");


router.use(auth)  // Todas las rutas estan protegidas en order


//order desde dashboard

router.get('/', orderController.index)  
router.get('/:id', orderController.show)
router.put('/:id', orderController.edit)
router.patch('/:id', orderController.update)
router.destroy('/:id', orderController.destroy)

// order desde user


router.get('/:userId', orderController.getOrdersbyUserid)
router.get('/:userId/:id', orderController.showOrder)
router.post('/:userId/:id:', orderController.create);
router.put('/:userId/:id', orderController.updateByUser);
router.delete('/:userId', orderController.destroyByUser);




module.exports = router