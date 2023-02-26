const expressLib = require("express");
const morganLib = require("morgan");
const helmetLib = require("helmet");
const cors = require('cors');
const mongoose = require("mongoose");
const routes = require("./routes");
// const bodyParser = require("body-parser");
// const { join } = require("path");
require('dotenv').config()

const appVar = expressLib();

const portVar = process.env.SERVER_PORT || 3001;

appVar.use(morganLib("dev"));
appVar.use(expressLib.urlencoded({ extended: true }));
appVar.use(cors());
appVar.use(expressLib.json());
// appVar.use(bodyParser.json());

appVar.use(
  helmetLib({ 
    contentSecurityPolicy: false,
  })
);

// if (process.env.NODE_ENV === "production") {
//   appVar.use(expressLib.static(join(__dirname, "build")));
// }

if (process.env.NODE_ENV === "production") {
  appVar.use(expressLib.static("build"));
}

// appVar.use(expressLib.static(join(__dirname, "build")));

appVar.use(routes);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/petsdb", //update db name
  {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  }
);

appVar.listen(portVar, () => console.log(`Server listening on port ${portVar}`));
