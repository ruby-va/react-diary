const Router = require("express").Router;
const router = new Router();
const imageController = require("../controllers/ImageController");

const sharp = require("sharp");
const upload = require("../multer/upload");

router.post(
  "/create",
  upload.single("upload"),
  //   sharpMiddleware,
  async (req, res, next) => {
    try {
      const fileName = `${Date.now()}${req.file.originalname}`;
      const fileUrl = __basedir + `/images/${fileName}`;

      await sharp(req.file.buffer)
        .resize({ width: 500, height: 500 })
        .png()
        .toFile(fileUrl);
      res.locals.fileUrl = fileUrl;
      res.locals.filename = fileName;
      next();
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  imageController.createImage
);

router.get('/all', imageController.getImages)

module.exports = router;
