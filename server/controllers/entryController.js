const Entry = require("../models/Entry");

class entryController {
  async createEntry(req, res) {
    try {
      console.log(req.body, " 44444444444");
      const entry = new Entry(req.body);
      await entry.save();
      console.log(entry);
      res.json(entry);
    } catch (e) {
      console.log(e);
    }
  }

  async getEntries(req, res) {
    try {
      const users = await Entry.find();
      res.json(users);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new entryController();
