import React from "react";
import {View,Text,StyleSheet,TextInput,TouchableOpacity,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

type NavProp = NativeStackNavigationProp<RootStackParamList>;

export default function LoginScreen() {
  const navigation = useNavigation<NavProp>();

  return (
    <View style={styles.container}>
      {/* BOTÓN ATRAS */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back-outline" size={28} color="#47C3CC" />
      </TouchableOpacity>
      {/* NOMBRE DE LA APP */}
      <Text style={styles.appName}>Day Off</Text>

      {/* TITULO */}
      <Text style={styles.title}>Iniciar Sesión</Text>

      {/* INPUT EMAIL */}
      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#777" />
        <TextInput
          placeholder="Correo electrónico"
          style={styles.input}
          keyboardType="email-address"
        />
      </View>

      {/* INPUT PASSWORD */}
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#777" />
        <TextInput
          placeholder="Contraseña"
          style={styles.input}
          secureTextEntry
        />
      </View>

      {/* BOTÓN LOGIN */}
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Ingresar</Text>
      </TouchableOpacity>

      {/* TEXTO IR A REGISTRO */}
      <TouchableOpacity
        style={{ marginTop: 20 }}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.registerLink}>
          ¿No tienes cuenta? <Text style={styles.registerStrong}>Regístrate</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: "#fff",
    paddingTop: 60,
  },

  backBtn: {
    marginBottom: 10,
    width: 40,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#47C3CC",
    marginBottom: 10,
  },
  

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8F8FA",
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 18,
  },

  input: {
    marginLeft: 10,
    flex: 1,
    fontSize: 15,
  },

  loginBtn: {
    marginTop: 10,
    backgroundColor: "#47C3CC",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  registerLink: {
    textAlign: "center",
    color: "#555",
  },

  registerStrong: {
    color: "#47C3CC",
    fontWeight: "bold",
  },
  appName: {
  fontSize: 60,
  fontWeight: "800",
  color: "#47C3CC",
  textAlign: "center",
  marginBottom: 50,
},
});
