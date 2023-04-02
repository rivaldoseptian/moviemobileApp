if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}


const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const [movieTypeDefs, movieResolvers] = require("./schema/movieSchema");

const server = new ApolloServer({
  typeDefs: [movieTypeDefs],
  resolvers: [movieResolvers],
  introspection: true,
});

startStandaloneServer(server, {
  listen: { port: process.env.PORT || 80 },
}).then(({ url }) => {
  console.log(`🚀  Server ready at: ${url}`);
});
