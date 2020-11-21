import axios from "axios";

export default {
  getDisasters: function() {
    return axios.get("/api/disasters");
  },

  getReadyKitByUser: function(username) {
    return axios.get("/api/readyKit/search/" + username);
  }
};
