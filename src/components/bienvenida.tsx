import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./navigation/types";
import { useNavigation } from "@react-navigation/native";

type NavProp = NativeStackNavigationProp<RootStackParamList, "Welcome">;

export default function WelcomeScreen() {
  const navigation = useNavigation<NavProp>();

  return (
    <View style={styles.container}>
      {/* TITLE */}
      <Text style={styles.title}>
        Day <Text style={styles.titleBold}>Off</Text>
      </Text>

      {/* SUBTITLE */}
      <Text style={styles.subtitle}>Conecta rápido, trabaja seguro.</Text>

      {/* BUTTON EXPLORE */}
      <TouchableOpacity
        style={styles.exploreBtn}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.exploreText}>Explorar</Text>
      </TouchableOpacity>

      {/* LOGIN & REGISTER LINKS */}
      <View style={styles.links}>
        <Text style={styles.linkText}>
          Si ya te registraste{" "}
          <Text style={styles.link} onPress={() => navigation.navigate("Login")}>
            Inicia sesión
          </Text>
        </Text>

        <Text style={styles.linkText}>
          Si aun no tienes una cuenta{" "}
          <Text style={styles.link} onPress={() => navigation.navigate("Register")}>
            Regístrate
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5EE7E1", 
    alignItems: "center",
    paddingTop: 120,
  },

  title: {
    fontSize: 100,
    fontWeight: "900",
    color: "#ffffff",
    textShadowColor: "#2AA7B8",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 0,
  },

  titleBold: {
    fontWeight: "900",
  },

  subtitle: {
    marginTop: 8,
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "500",
  },

  exploreBtn: {
    marginTop: 70,
    backgroundColor: "#ffffff",
    paddingVertical: 14,
    paddingHorizontal: 80,
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
  },

  exploreText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#57C7CF",
  },

  links: {
    marginTop: 80,
    alignItems: "center",
  },

  linkText: {
    color: "#000000",
    fontSize: 13,
    marginTop: 6,
  },

  link: {
    color: "#1A8FE3",
    textDecorationLine: "underline",
  },
});
