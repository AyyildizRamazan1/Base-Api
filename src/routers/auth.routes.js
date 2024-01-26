const router = require("express").Router()
const {
  login,
  register,
  me,
  forgetPassword,
} = require("../controllers/auth.contoller");
const authValidation = require("../middlewares/validations/auth.validation");
const { tokenCheck } = require("../middlewares/validations/auth");

router.post("/login", authValidation.login, login);

router.post("/register", authValidation.register, register);

router.get("/me", tokenCheck, me);

router.post("/forget-password", forgetPassword);

module.exports = router 