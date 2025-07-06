const express = require("express");
const router =express.Router();
const authControllers = require('../auth-controllers/auth-controller');


router.route("/Login").post(authControllers.Login);
router.route("/Register").post(authControllers.Register);
router.route("/DasBoard").get(authControllers.DasBoard);

module.exports = router;
