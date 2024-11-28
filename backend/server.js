const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const productrouter = require("./routes/productRoute");
const authrouter = require("./routes/authRoute");
const morgen = require("morgan");
const cookieParser = require("cookie-parser");
const validateJsonBody = require("./middleware/validJson");
const errorHandler = require("./middleware/errorMiddleware");

mongoose
  .connect(process.env.MONGO_URI)
  .then((result) => {
    console.log("Db connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(validateJsonBody);
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgen("dev"));

app.use("/api/product", productrouter);
app.use("/api/auth", authrouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
});
module.exports = app;
