const path = require("path");
const routerExpress = require("express").Router();
const favoritesRoutes = require("./favorites");

// Favorites routes
routerExpress.use("/favorites", favoritesRoutes);

// For anything else, render the html page
routerExpress.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../build/index.html"));
});

module.exports = routerExpress;
