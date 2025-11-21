import React from "react";
import {View,Text,StyleSheet,TextInput,TouchableOpacity,FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabsParamList } from "../navigation/types";

export type Job = {
  id: string;
  title: string;
  description: string;
  location: string;
  price: number;
};
import {
  CompositeNavigationProp,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { WorkerStackParamList } from "../navigation/stackUser";

type NavigationProps = CompositeNavigationProp<BottomTabNavigationProp<TabsParamList, "Jobs">,NativeStackNavigationProp<WorkerStackParamList>>;
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
    description:
      "Personas que vigilen el flujo de gente en el evento...",
    location: "Robledo pajarito",
    price: 45000,
  },
];

export default function JobsScreen() {
  const navigation = useNavigation<NavigationProps>();

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
        <Text style={styles.perDay}>/dia</Text>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("JobDetail", { job: item })}
        >
          <Text style={styles.btnText}>Ver más..</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={26} color="#47C3CC" />
        </TouchableOpacity>
        <Text style={styles.title}>Day Off</Text>
        <View style={{ width: 26 }} />
      </View>
      {/* FILTER */}
      <TouchableOpacity style={styles.filterBtn}>
        <Text style={styles.filterText}>Filtrar</Text>
        <Ionicons name="chevron-down-outline" size={18} color="#333" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Welcome" as never)}>
        <Ionicons name="exit-outline" size={26} color="#57D1DA" />
      </TouchableOpacity>

      {/* LISTA */}
      <FlatList
        data={jobs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
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

  searchInput: {
    marginLeft: 10,
    flex: 1,
  },

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

  filterText: {
    fontSize: 14,
    marginRight: 5,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginTop: 18,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },

  cardDesc: {
    color: "#777",
    marginVertical: 6,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  location: {
    marginLeft: 4,
    color: "#555",
  },

  bottomCard: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  price: {
    fontSize: 18,
    fontWeight: "bold",
  },

  perDay: {
    marginLeft: 3,
    color: "#555",
  },

  btn: {
    marginLeft: "auto",
    backgroundColor: "#57D1DA",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 8,
  },

  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 65,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
