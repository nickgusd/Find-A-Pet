const expressLib = require("express");
const morganLib = require("morgan");
const helmetLib = require("helmet");
const cors = require('cors');
const mongoose = require("mongoose");
const routes = require("./routes");

require('dotenv').config()

const appVar = expressLib();

const portVar = process.env.PORT || 3001;
const host = "0.0.0.0"

appVar.use(morganLib("dev"));
appVar.use(expressLib.urlencoded({ extended: true }));
appVar.use(cors());
appVar.use(expressLib.json());

appVar.use(
  helmetLib({ 
    contentSecurityPolicy: false,
  })
);

if (process.env.NODE_ENV === "production") {
  appVar.use(expressLib.static("build"));
}


appVar.use(routes);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/petsdb", //update db name
  {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  }
);

appVar.listen(portVar, host,  () => console.log(`Server listening on port ${portVar}`));
