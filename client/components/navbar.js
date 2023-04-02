import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomNavbar = () => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity>
        <Text style={styles.navbarButton}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.navbarButton}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.navbarButton}>Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ff6347",
    height: 60,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  navbarButton: {
    fontSize: 16,
    color: "#fff",
  },
});

export default CustomNavbar;
