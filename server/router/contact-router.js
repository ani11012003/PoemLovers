const express = require('express');
const AuthMiddleware = require('../middlewares/auth-middleware')
const router =express.Router();
const contactForm=require("../controllers/contact-controller");
router.route('/contact').post(AuthMiddleware,contactForm);
module.exports = router;