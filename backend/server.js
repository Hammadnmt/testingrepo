const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const productrouter = require("./routes/productRoute");
const authrouter = require("./routes/authRoute");
const morgen = require("morgan");
const cookieParser = require("cookie-parser");

mongoose
  .connect(process.env.MONGO_URI)
  .then((result) => {
    console.log("Db connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgen("dev"));

app.use("/product", productrouter);
app.use("/auth", authrouter);

app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
});
module.exports=app