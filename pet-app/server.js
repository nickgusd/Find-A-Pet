const expressLib = require("express");
const morganLib = require("morgan");
const helmetLib = require("helmet");
const { join } = require("path");

const appVar = expressLib();

const portVar = process.env.SERVER_PORT || 3000;

appVar.use(morganLib("dev"));

appVar.use(
  helmetLib({
    contentSecurityPolicy: false,
  })
);

appVar.use(expressLib.static(join(__dirname, "build")));

appVar.listen(portVar, () => console.log(`Server listening on port ${portVar}`));
