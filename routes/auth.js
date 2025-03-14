const express = require('express')
const passport = require('passport')

const User = require('../models/User')

const router = express.Router()

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/register', async(req, res) => {
    const { username, email, password } = req.body
    try {
        await User.create({ username, email, password })
        req.flash('success_msg', 'Registration successful. You can now log in.')
        res.redirect('/auth/login')
    }
    catch(error) {
        req.flash('error_msg', 'Error in registration')
        res.redirect('/auth/register')
    }
})

router.post('/login', passport.authenticate('local', {
    successRedirect: '/desktop',
    failureRedirect: '/auth/login',
    failureFlash: true
}))

router.get('/logout', (req, res) => {
    req.logOut(() => {
        req.flash('success_msg', 'You are logged out')
        res.redirect('/auth/login')
    })
})

module.exports = router
