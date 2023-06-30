const Router = require("express").Router;
const userController = require("../controllers/UserController");
const postController = require("../controllers/PostController");
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

// Posts
// TODO: Добавить валидацию на ссылку - пропускать только картинки
router.post(
  "/posts/create",
  body("title", "Заголовок не может быть пустым.").notEmpty(),
  body("content", "Текст должен быть больше 30 символов").isLength({
    min: 30,
  }),
  body("image", "Изображение должно быть ссылкой")
    .optional({ nullable: true })
    .isURL(),

  postController.createPost
);

router.get("/posts/all", authMiddleware, postController.getPosts);

router.get("/posts/filtered", authMiddleware, postController.getFilteredPosts);

module.exports = router;
