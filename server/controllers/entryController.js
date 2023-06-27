const Entry = require("../models/Entry");
const { validationResult } = require("express-validator");

class entryController {
  async createEntry(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: "Ошибка при добавлении поста", errors });
      }
      const entry = new Entry(req.body);
      const entryD = await entry.save();
      res.json(entryD);
    } catch (e) {
      console.log(e);
    }
  }

  async getEntries(req, res) {
    try {
      const entries = await Entry.find();
      res.json(entries);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new entryController();
