const express = require('express')

const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router()

router.get('/', (req, res) => {
    res.redirect('/desktop')
})

router.get('/desktop', authMiddleware, (req, res) => {
    res.render('desktop', { user: req.user })
})

router.post('/search', async(req, res) => {
    const { searchword } = req.body
    try {
        res.redirect(`https://www.google.com/search?q=${encodeURIComponent(searchword)}`)
    }
    catch(error) {
        req.flash('error_msg', 'Error in search')
        res.redirect('/desktop')
    }
})

module.exports = router
