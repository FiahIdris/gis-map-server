const express = require('express')
const router = express.Router()
const users = require('./users.js')
const locations = require('./locations.js')


router.use('/', users)
router.use('/', locations)
module.exports = router