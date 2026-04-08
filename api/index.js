// imports
require("dotenv").config({ path: require("path").resolve(__dirname, ".env") });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./src/routes/index.js");
const errorHandler = require("./src/middleware/error.js");

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");

// config
const app = express();
const port = process.env.PORT || 4000;
const db = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/taller";

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
app.use("/taller/", router);
app.use(errorHandler);

// connect to DB & listen
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(port, () => {
      console.log(
        `Server on port ${port} and connected to DB ${mongoose.connection.name}`
      );
    });
  } catch (err) {
    console.log("Error al conectar a la db");
    console.error(err.message);
    process.exit(1);
  }
};

connectDB();
