import { StyleSheet, View, ScrollView } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import CustomCard from "../components/customcard";

export default function App({ navigation }) {
  return (
    <SafeAreaView stayle={styles.container}>
      <ScrollView>
        <View>
          <CustomCard navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
