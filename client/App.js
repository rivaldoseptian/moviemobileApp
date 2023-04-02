import { StyleSheet } from "react-native";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./navigators/MainStack";
import client from "./config/apollo";
import { ApolloProvider } from "@apollo/client";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
