const Router = require("express");
const router = new Router();
const controller = require("../controllers/entryController.js");

router.post("/create", controller.createEntry);

module.exports = router;
