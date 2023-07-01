require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const router = require("./router/index");
const errorMiddleware = require("./middleware/error-middleware");

const PORT = process.env.PORT || 5000;
const database = process.env.DB_URL;
const path = require("path");
const app = express();

global.__basedir = __dirname;

var dirImages = path.join(__dirname, "images");

//Setting storage engine
// const storageEngine = multer.diskStorage({
//   destination: "./images",
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}--${file.originalname}`);
//   },
// });

// const checkFileType = function (file, cb) {
//   //Allowed file extensions
//   const fileTypes = /jpeg|jpg|png|gif|svg/;

//   //check extension names
//   const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());

//   const mimeType = fileTypes.test(file.mimetype);

//   if (mimeType && extName) {
//     return cb(null, true);
//   } else {
//     cb("Error: You can Only Upload Images!!");
//   }
// };

// const upload = multer({
//   storage: storageEngine,
//   limits: { fileSize: 10000000 },
//   fileFilter: (req, file, cb) => {
//     checkFileType(file, cb);
//   },
// });

// app.post("/image", upload.single("upload"), async (req, res) => {
//   try {
//     const fileUrl = __dirname + `/images/${Date.now()}${req.file.originalname}`;
//     await sharp(req.file.buffer)
//       .resize({ width: 500, height: 500 })
//       .png()
//       .toFile(fileUrl);
//     res.status(201).send("Image uploaded succesfully");
//   } catch (error) {
//     console.log(error);
//     res.status(400).send(error);
//   }
// });

// app.post("/single", upload.single("image"), (req, res) => {
//   if (req.file) {
//     res.send("Single file uploaded successfully");
//   } else {
//     res.status(400).send("Please upload a valid image");
//   }
// });

// app.post("/multiple", upload.array("images", 5), (req, res) => {
//   if (req.files) {
//     res.send("Muliple files uploaded successfully");
//   } else {
//     res.status(400).send("Please upload a valid images");
//   }
// });

app.use(express.static(dirImages));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use("/api", router);
app.use(errorMiddleware);

const start = async () => {
  try {
    await mongoose.connect(database, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
