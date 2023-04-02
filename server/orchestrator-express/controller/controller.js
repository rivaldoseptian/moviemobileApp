const axios = require("axios");
const redis = require("../config/redis");

class Controller {
  static async fetchMovie(req, res) {
    try {
      const movieCache = await redis.get("app:movies");
      if (movieCache) {
        return res.json(JSON.parse(movieCache));
      } else {
        const { data } = await axios.get(
          "http://localhost:4002/movies/pub/fetchmovie"
        );
        await redis.set("app:movies", JSON.stringify(data));

        res.json(data);
      }
    } catch (error) {
      console.log(error);
      res.status(error.response.status).json(error.response.data);
    }
  }

  static async detailMovie(req, res) {
    try {
      const id = req.params.movieId;
      const { data } = await axios.get(
        "http://localhost:4002/movies/pub/detail/" + id
      );
      const responseUser = await axios.get(
        "http://localhost:4001/user/find/" + data.authorId
      );
      data.user = responseUser.data;
      res.json(data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  }

  static async createUser(req, res) {
    try {
      const { username, email, password, phoneNumber, address } = req.body;
      const { data } = axios.post("http://localhost:4001/user/create", {
        username,
        email,
        password,
        phoneNumber,
        address,
      });
      res.json(data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  }
}

module.exports = Controller;
