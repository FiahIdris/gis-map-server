const express = require('express')
const router = express.Router()
const LocationController = require('../controllers/locations.js')
const { authentication } = require('../middlewares/auth.js')

router.get('/locations', authentication, LocationController.findAll)
router.post('/locations', authentication, LocationController.create)
router.put('/locations/:id', authentication, LocationController.edit)
router.delete('/locations/:id', authentication, LocationController.delete)


module.exports = router