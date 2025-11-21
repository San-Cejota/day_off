import React from "react";
import {View,Text,StyleSheet,TextInput,TouchableOpacity,ScrollView,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function EmployerProfileScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* HEADER */}
      <View style={styles.header}>
        {/* BACK BUTTON */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={26} color="#57D1DA" />
        </TouchableOpacity>

        <Text style={styles.title}>Day Off</Text>

        {/* GO TO WELCOME */}
        <TouchableOpacity onPress={() => navigation.navigate("Welcome" as never)}>
          <Ionicons name="exit-outline" size={26} color="#57D1DA" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
        {/* ICON + PERFIL */}
        <View style={styles.profileRow}>
          <Ionicons name="person-circle-outline" size={40} color="#000" />
          <Text style={styles.profileTitle}>Perfil</Text>
        </View>

        {/* --- DATOS EMPLEADOR --- */}
        <Text style={styles.sectionTitle}>Datos del Empleador</Text>

        <Text style={styles.label}>Nombre:</Text>
        <TextInput style={styles.input} placeholder="" />

        <Text style={styles.label}>Gmail:</Text>
        <TextInput style={styles.input} placeholder="" />

        {/* --- DATOS DEL NEGOCIO --- */}
        <Text style={[styles.sectionTitle, { marginTop: 20 }]}>
          Datos del negocio / empresa
        </Text>

        <Text style={styles.label}>Nombre del negocio:</Text>
        <TextInput style={styles.input} placeholder="" />

        <Text style={styles.label}>Tipo de actividad:</Text>
        <TextInput style={styles.input} placeholder="" />

        <Text style={styles.label}>Ubicación:</Text>
        <TextInput style={styles.input} placeholder="" />

        {/* BOTÓN GUARDAR */}
        <TouchableOpacity style={styles.saveBtn}>
          <Text style={styles.saveText}>Guardar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 45,
    paddingHorizontal: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#57D1DA",
  },

  profileRow: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  profileTitle: {
    fontSize: 22,
    marginLeft: 10,
  },

  sectionTitle: {
    marginTop: 25,
    fontWeight: "bold",
    color: "#57D1DA",
  },

  label: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 14,
  },

  input: {
    backgroundColor: "#EFEFEF",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
  },

  saveBtn: {
    backgroundColor: "#57D1DA",
    alignSelf: "center",
    marginTop: 25,
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 8,
  },

  saveText: {
    color: "#fff",
    fontWeight: "bold",
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  addButton: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "#57D1DA",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
    elevation: 4,
  },
});
