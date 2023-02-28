/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  // Gets Favorites
  getFavorites: function({userId}: any) {
    return axios.get("/api/favorites/" + userId);
  },
  // Deletes the favorite pet with the given id
  deleteFavorite: function(id: string) {
    return axios.delete("/api/favorites/" + id);
  },
  // Saves a favorite pet to the database
  saveFavorite: function(favoriteData: any) {
    return axios.post("/api/favorites/", favoriteData);
  }
};
