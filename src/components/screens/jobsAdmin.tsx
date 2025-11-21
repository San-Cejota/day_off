import React from "react";
import {View,Text,StyleSheet,TextInput,TouchableOpacity,FlatList,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export type Job = {
  id: string;
  title: string;
  description: string;
  location: string;
  price: number;
};

const jobs: Job[] = [
  {
    id: "1",
    title: "Trabajo Mesero x2 días",
    description: "Necesito una persona para cubrir dos días en...",
    location: "Poblado",
    price: 80000,
  },
  {
    id: "2",
    title: "Personal adicional para evento",
    description: "Personas que vigilen el flujo de gente en el evento...",
    location: "Robledo pajarito",
    price: 45000,
  },
];

export default function JobsEmployerScreen() {
  const navigation = useNavigation();

  const renderItem = ({ item }: { item: Job }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDesc}>{item.description}</Text>

      <View style={styles.row}>
        <Ionicons name="location-outline" size={16} color="#888" />
        <Text style={styles.location}>{item.location}</Text>
      </View>

      <View style={styles.bottomCard}>
        <Text style={styles.price}>
          ${item.price.toLocaleString("es-CO")}
        </Text>
        <Text style={styles.perDay}>/día</Text>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Ver más..</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
{/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={26} color="#47C3CC" />
        </TouchableOpacity>

        <Text style={styles.title}>Day Off</Text>

        <View style={{ width: 26 }} />
      </View>

      <TouchableOpacity style={styles.filterBtn}>
        <Text style={styles.filterText}>Filtrar</Text>
        <Ionicons name="chevron-down-outline" size={18} color="#333" />
      </TouchableOpacity>

      <FlatList
        data={jobs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 120 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 18 },

  header: {
    marginTop: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#57D1DA",
  },

  searchContainer: {
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DFF4F6",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
  },

  searchInput: { marginLeft: 10, flex: 1 },

  filterBtn: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#EFEFEF",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },

  filterText: { marginRight: 5, fontSize: 14 },

  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginTop: 18,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  cardTitle: { fontSize: 16, fontWeight: "bold" },

  cardDesc: { color: "#777", marginVertical: 6 },

  row: { flexDirection: "row", alignItems: "center", marginBottom: 8 },

  location: { marginLeft: 4, color: "#555" },

  bottomCard: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  price: { fontSize: 18, fontWeight: "bold" },

  perDay: { marginLeft: 3, color: "#555" },

  btn: {
    marginLeft: "auto",
    backgroundColor: "#57D1DA",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 8,
  },

  btnText: { color: "#fff", fontWeight: "bold" },

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
