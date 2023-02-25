const pathVar = require("path");
const routerVar = require("express").Router();
const apiRoutes = require("./api");

// API Routes
routerVar.use("/api", apiRoutes);

// If no API routes are hit, send the React app
routerVar.use((req, res) =>
  res.sendFile(pathVar.join(__dirname, "../build/index.html"))
);

module.exports = routerVar;
 