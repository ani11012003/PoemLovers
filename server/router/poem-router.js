const express = require('express');
const AuthMiddleware = require('../middlewares/auth-middleware')
const router =express.Router();
const PoemForm=require("../controllers/poem-controller");
router.route('/poem').post(AuthMiddleware,PoemForm);
module.exports = router;