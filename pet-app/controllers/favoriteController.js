const db = require("../models");

// Defining methods for the favoritesController
module.exports = {
  findAll: function(req, res) {
    db.Favorites.find(req.query)
      .then(dbFavorite => res.json(dbFavorite))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Favorites.findById(req.params.id)
      .then(dbFavorite => res.json(dbFavorite))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("req.body", req.body)
    db.Favorites.create(req.body)
      .then(dbFavorite => res.json(dbFavorite))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Favorites.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbFavorite => res.json(dbFavorite))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Favorites.findById(req.params.id)
      .then(dbFavorite => dbFavorite.remove())
      .then(dbFavorite => res.json(dbFavorite))
      .catch(err => res.status(422).json(err));
  }
};
