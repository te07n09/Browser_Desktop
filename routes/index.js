const express = require('express')

const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router()

router.get('/', (req, res) => {
    res.redirect('/desktop')
})

router.get('/desktop', authMiddleware, (req, res) => {
    res.render('desktop', { user: req.user })
})

module.exports = router
