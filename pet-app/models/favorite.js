const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  name: { type: String },
  type: { type: String },
  petId: { type: String },
  userId: { type: String },
  age: { type: String },
  breed: { type: String },
  organizationId: { type: String},
  image: { type: String },
  distance: { type: Number }
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;
 