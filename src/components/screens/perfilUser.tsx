import React, { useState } from "react";
import {View,Text, ScrollView,TextInput,TouchableOpacity,StyleSheet,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { CompositeNavigationProp } from "@react-navigation/native";
import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TabsParamList, RootStackParamList } from "../navigation/types";

type TabNav = BottomTabNavigationProp<TabsParamList, "Profile">;
type StackNav = NativeStackNavigationProp<RootStackParamList, "Home">;
type NavigationProp = CompositeNavigationProp<TabNav, StackNav>;

export default function WorkerProfileScreen() {
  const navigation = useNavigation<NavigationProp>();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [skills, setSkills] = useState("");

  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={28} color="#47C3CC" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Perfil trabajador</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
          <Ionicons name="exit-outline" size={24} color="#47C3CC" />
        </TouchableOpacity>
      </View>

      {/* FORM */}
      <Text style={styles.sectionTitle}>Tus datos</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          placeholder="Tu nombre"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput
          style={styles.input}
          placeholder="correo@ejemplo.com"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Teléfono</Text>
        <TextInput
          style={styles.input}
          placeholder="Opcional"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Habilidades / Perfil</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Describe tus habilidades"
          multiline
          value={skills}
          onChangeText={setSkills}
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={() => { /* Lógica guardar */ }}>
        <Text style={styles.saveText}>Guardar cambios</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#57D1DA",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#47C3CC",
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: "#333333",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#E8F8FA",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 15,
    color: "#000",
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
  saveButton: {
    backgroundColor: "#57D1DA",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 40,
  },
  saveText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
