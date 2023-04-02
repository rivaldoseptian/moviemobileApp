import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://clientmobile.septianrivaldo.site",
  cache: new InMemoryCache(),
});

export default client;
