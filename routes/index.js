const express = require('express')

const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/desktop', authMiddleware, (req, res) => {
    res.render('dashboart', { user: req.user })
})

module.exports = router
