const Router = require("express");
const router = new Router();

const authRouter = require("./authRouter");
const entryRouter = require("./entryRouter");

router.use("/auth", authRouter);
router.use("/entry", entryRouter);

module.exports = router;
