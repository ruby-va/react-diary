const Image = require("../models/Image");
const { validationResult } = require("express-validator");
const fs = require("fs");
const ImageDto = require("../dtos/ImageDto");

class PostController {
  async createImage(req, res) {
    try {
      const { fileUrl, filename } = res.locals;
      const { name } = req.body;
      console.log(fileUrl, filename, name);
      const image = new Image({
        url: fileUrl,
        title: name,
        filename: filename,
      });
      const myImage = await image.save();
      const newImage = new ImageDto(myImage);
      return res.json(newImage);
    } catch (e) {
      const { fileUrl } = res.locals;
      fs.unlink(fileUrl, (err) => {
        console.log(err);
        return res.json(e);
      });
      console.log(e);
    }
  }

  async getImages(req, res) {
    try {
      const images = await Image.find();
      const newImages = images.map((image) => new ImageDto(image));
      res.json(newImages);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new PostController();
