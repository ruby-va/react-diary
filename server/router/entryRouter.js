const Router = require("express");
const router = new Router();
const controller = require("../controllers/entryController.js");
const { check } = require("express-validator");

// TODO: Добавить валидацию на ссылку - пропускать только картинки
router.post(
  "/create",
  [
    check("title", "Заголовок не может быть пустым.").notEmpty(),
    check("content", "Текст должен быть больше 30 символов").isLength({
      min: 30,
    }),
    check("image", "Изображение должно быть ссылкой")
      .optional({ nullable: true })
      .isURL(),
  ],
  controller.createEntry
);

module.exports = router;
