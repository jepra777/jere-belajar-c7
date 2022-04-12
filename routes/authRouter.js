const AuthController = require("../controllers/authController")
const { validatorHandler } = require("../middleware/validatorJoi")
const { registerUserSchema, loginUserSchema } = require('../validation/authSchema.joi')
const authRouter = require('express').Router()

authRouter.post("/registerJoi", validatorHandler(registerUserSchema, "body"), AuthController.register)

authRouter.post("/login", validatorHandler(loginUserSchema, "body"), AuthController.login)

module.exports = authRouter