const express = require('express')
const router = express.Router()
const UserController = require('../controllers/users.js')

router.post('/login', UserController.login)

module.exports = router