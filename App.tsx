import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./src/components/screens/home";

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}
