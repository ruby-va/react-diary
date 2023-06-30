const Router = require("express").Router;
const userController = require("../controllers/UserController");
const router = new Router();
const { body } = require("express-validator");
const authMiddleware = require("../middleware/auth-middleware");

router.post(
  "/registration",
  body("email", "Невалидный Email").isEmail(),
  body("password", "Длинна пароля должна быть от 5 до 32 символов").isLength({
    min: 5,
    max: 32,
  }),
  userController.registration
);
router.post("/login", userController.login);
router.post("/logout", userController.logout);

router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);
router.get("/users", authMiddleware, userController.getUsers);

module.exports = router;
