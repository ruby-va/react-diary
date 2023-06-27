const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5001;
const router = require("./router/index");

const app = express();

app.use(express.json());
app.use("/api", router);

const start = async () => {
  try {
    await mongoose.connect(`mongodb://127.0.0.1:27017/test`);
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
