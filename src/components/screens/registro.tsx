import React, { useState } from "react";
import {View,Text,StyleSheet,TextInput,TouchableOpacity,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

type NavProp = NativeStackNavigationProp<RootStackParamList>;

export default function RegisterScreen() {
  const navigation = useNavigation<NavProp>();

  const [showRoles, setShowRoles] = useState(false);
  const [selectedRole, setSelectedRole] = useState<"Trabajador" | "Empleador" | null>(null);

  return (
    <View style={styles.container}>
      {/* BOTÓN VOLVER */}
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back-outline" size={28} color="#47C3CC" />
      </TouchableOpacity>

      {/* TÍTULO */}
      <Text style={styles.title}>Crear Cuenta</Text>

      {/* INPUT NOMBRE */}
      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={20} color="#777" />
        <TextInput placeholder="Nombre completo" style={styles.input} />
      </View>

      {/* INPUT CORREO */}
      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#777" />
        <TextInput
          placeholder="Correo electrónico"
          keyboardType="email-address"
          style={styles.input}
        />
      </View>

      {/* INPUT CONTRASEÑA */}
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#777" />
        <TextInput placeholder="Contraseña" secureTextEntry style={styles.input} />
      </View>

      {/* SELECTOR DE ROL */}
      <TouchableOpacity
        style={styles.roleSelector}
        onPress={() => setShowRoles(!showRoles)}
      >
        <Ionicons name="people-outline" size={20} color="#777" />

        <Text style={styles.roleSelectorText}>
          {selectedRole ? selectedRole : "Elige tu rol"}
        </Text>

        <Ionicons
          name={showRoles ? "chevron-up-outline" : "chevron-down-outline"}
          size={20}
          color="#777"
        />
      </TouchableOpacity>

      {/* LISTA DE ROLES */}
      {showRoles && (
        <View style={styles.roleDropdown}>
          <TouchableOpacity
            style={styles.roleOption}
            onPress={() => {
              setSelectedRole("Trabajador");
              setShowRoles(false);
            }}
          >
            <Text style={styles.roleOptionText}>Trabajador</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.roleOption}
            onPress={() => {
              setSelectedRole("Empleador");
              setShowRoles(false);
            }}
          >
            <Text style={styles.roleOptionText}>Empleador</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* BOTÓN REGISTRAR */}
      <TouchableOpacity style={styles.registerBtn}>
        <Text style={styles.registerText}>Registrarme</Text>
      </TouchableOpacity>

      {/* YA TIENES CUENTA */}
      <TouchableOpacity
        style={{ marginTop: 20 }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.loginLink}>
          ¿Ya tienes cuenta?{" "}
          <Text style={styles.loginStrong}>Inicia sesión</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// ESTILOS
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
    marginBottom: 40,
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

  roleSelector: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8F8FA",
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 10,
  },

  roleSelectorText: {
    marginLeft: 10,
    flex: 1,
    fontSize: 15,
    color: "#444",
  },

  roleDropdown: {
    backgroundColor: "#F1FBFC",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#CFEFF2",
    marginBottom: 20,
  },

  roleOption: {
    paddingVertical: 12,
    paddingHorizontal: 15,
  },

  roleOptionText: {
    fontSize: 15,
    color: "#333",
  },

  registerBtn: {
    backgroundColor: "#47C3CC",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },

  registerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  loginLink: {
    textAlign: "center",
    color: "#555",
  },

  loginStrong: {
    color: "#47C3CC",
    fontWeight: "bold",
  },
});
