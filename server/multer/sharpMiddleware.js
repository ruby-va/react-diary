const sharp = require("sharp");

module.exports = async (req, res, next) => {
  try {
    const fileUrl = __basedir + `/images/${Date.now()}${req.file.originalname}`;
    await sharp(req.file.buffer)
      .resize({ width: 500, height: 500 })
      .png()
      .toFile(fileUrl);
    next();
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

module.exports = sharp;
