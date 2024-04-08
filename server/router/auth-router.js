const express = require('express');
const router =express.Router();
const authControllers=require('../controllers/auth-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const Schema=require('../validators/auth-validator');
const validate=require('../middlewares/validate-middleware');
router.route("/").get(authControllers.home);
router.route("/register").post(validate(Schema.signupSchema),authControllers.register);
router.route("/login").post(validate(Schema.signinSchema),authControllers.login);
router.route("/user").get(authMiddleware,authControllers.user);
module.exports=router;

