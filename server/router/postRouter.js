const Router = require("express").Router;
const router = new Router();
const postController = require("../controllers/PostController");
const { body } = require("express-validator");
const authMiddleware = require("../middleware/auth-middleware");

// Posts
// TODO: Добавить валидацию на ссылку - пропускать только картинки
router.post(
  "/create",
  body("title", "Заголовок не может быть пустым.").notEmpty(),
  body("content", "Текст должен быть больше 30 символов").isLength({
    min: 30,
  }),
  body("image", "Изображение должно быть ссылкой")
    .optional({ nullable: true })
    .isURL(),

  postController.createPost
);

router.get("/all", authMiddleware, postController.getPosts);

router.get("/filtered", authMiddleware, postController.getFilteredPosts);

module.exports = router;
