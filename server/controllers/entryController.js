const Entry = require("../models/Entry");

class entryController {
  async createEntry(req, res) {
    try {
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
