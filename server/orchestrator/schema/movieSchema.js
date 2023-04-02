const axios = require("axios");
const BaseUrlMovie = process.env.BaseUrlMovie;
const BaseUrlUser = process.env.BaseUrlUser;
const redis = require("../config/redis");

const typeDefs = `#graphql
    type Movie{
        id:ID
        title:String
        synopsis:String
        trailerUrl:String
        imgUrl:String
        rating:Int
        genre:Genre
        casts:[Casts]
        authorId:String
        user:User
    }

    type Genre{
        id:ID
        name:String
    },

    type Casts{
        id:ID
        movieId:Int
        name:String
        profilePict:String
    }
    type User{
        id:ID
        username:String
        email:String
        phoneNumber:String
    }
    input newmovie{
        title:String
        synopsis:String
        trailerUrl:String
        imgUrl:String
        rating:Int
        genreId:Int
        authorId:String
    }


    type Query{
        movies:[Movie]
        movie(id:ID!): Movie
    }

    type Mutation{
        addMovie(
        newmovie:newmovie
        ):Movie
    }
    
`;

const resolvers = {
  Query: {
    movies: async () => {
      try {
        let { data } = await axios.get(BaseUrlMovie + "/movies/pub/fetchmovie");
        data.map((item) => {
          item.genre = item.Genre;
          item.casts = item.Casts;
          return item;
        });
        await redis.set("app:movies", JSON.stringify(data));
        return data;
      } catch (error) {
        throw error;
      }
    },
    movie: async (_, { id }) => {
      try {
        let { data } = await axios.get(
          `${BaseUrlMovie}/movies/pub/detail/${id}`
        );
        data.genre = data.Genre;
        data.casts = data.Casts;
        const responseUser = await axios.get(
          BaseUrlUser + "/user/find/" + data.authorId
        );
        data.user = responseUser.data;
        return data;
      } catch (error) {
        throw error;
      }
    },
  },
  Mutation: {
    addMovie: async (_, args) => {
      try {
        const { newmovie } = args;
        const {
          title,
          synopsis,
          trailerUrl,
          imgUrl,
          rating,
          genreId,
          authorId,
        } = newmovie;
        const { data } = await axios.post(BaseUrlMovie + "/movies/create", {
          title,
          synopsis,
          trailerUrl,
          imgUrl,
          rating,
          genreId,
          authorId,
        });
        return data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
};

module.exports = [typeDefs, resolvers];
