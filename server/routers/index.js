const express = require('express')
const User=require('../../models/user')
const router = express.Router()
const {home, signup, signin, postsignup, postsignin}=require('../controllers/mainController')
router.get('/',home)
router.get('/signout',signin)
router.get('/signUp',signup)

router.post('/postSignUp',postsignup)
router.post('/postSignIn',postsignin)
module.exports = router