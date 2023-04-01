const router = require("express").Router()
const {checkDuplicateUsernameOrEmail} = require("../middleware")
const {register, login, refresh} = require("../controllers");


router.post("/register", checkDuplicateUsernameOrEmail, register)
router.post("/login", login)
router.post("/refresh", refresh)


module.exports = router





