const Router = require("express").Router;

const authRouter = require("./authRouter");
const postRouter = require("./postRouter");
const imageRouter = require("./imageRouter");

const router = new Router();

router.use("/auth", authRouter);
router.use("/posts", postRouter);
router.use("/images", imageRouter);

module.exports = router;
