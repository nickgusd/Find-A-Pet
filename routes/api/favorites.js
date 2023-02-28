const router = require("express").Router();
const favoriteController = require("../../controllers/favoriteController");

// Matches with "/api/favorites"
router.route("/")
  .get(favoriteController.findAll)
  .post(favoriteController.create);

// Matches with "/api/favorites/:id"
router
  .route("/:id")
  .get(favoriteController.findAll)
  .get(favoriteController.findById)
  .put(favoriteController.update)
  .delete(favoriteController.remove);

module.exports = router;
