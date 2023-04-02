///////////////////////////////////////////

import * as React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        style={styles.button}
        title="Go to Details"
        onPress={() => navigation.navigate("Detail")}
      >
        <Text>movie</Text>
      </TouchableOpacity>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Detail")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    alignItems: "center",

    padding: 10,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
});

export default HomeScreen;
