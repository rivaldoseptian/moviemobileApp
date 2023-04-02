import React from "react";
import DetailMovie from "../pages/detail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../pages/Home";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        title: "My Tomatoes",
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailMovie} />
    </Stack.Navigator>
  );
};

export default MainStack;
