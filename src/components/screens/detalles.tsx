import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,Animated} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { WorkerStackParamList } from "../navigation/stackUser";

type Props = NativeStackScreenProps<WorkerStackParamList, "JobDetail">;

export default function JobDetailScreen({ route, navigation }: Props) {
  const { job } = route.params;
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={26} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Day Off</Text>
        <View style={{ width: 26 }} />
      </View>

      <View style={{ height: 15 }} />
      <Text style={styles.title}>{job.title}</Text>

      <Text
        style={styles.desc}
        numberOfLines={4}
        ellipsizeMode="tail"
      >
        {job.description}
      </Text>

      <View style={styles.locationRow}>
        <Ionicons name="location-outline" size={18} color="#555" />
        <Text style={styles.locationText}>{job.location}</Text>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.price}>
          ${job.price.toLocaleString("es-CO")}
        </Text>
        <Text style={styles.perDay}>/dia</Text>
      </View>

      <TouchableOpacity style={styles.applyBtn}>
        <Text style={styles.applyText}>Postularme</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#fff", 
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  header: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#57D1DA",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
    marginTop: 20,
  },
  desc: {
    marginTop: 12,
    fontSize: 15,
    lineHeight: 22,
    color: "#444",
    width: "90%",
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
  },
  locationText: {
    marginLeft: 6,
    fontSize: 15,
    color: "#555",
  },
  priceContainer: {
    marginTop: 40,
    flexDirection: "row",
    alignSelf: "flex-end",
    alignItems: "center",
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
  },
  perDay: {
    marginLeft: 4,
    fontSize: 14,
    color: "#666",
  },
  applyBtn: {
    marginTop: 50,
    backgroundColor: "#57D1DA",
    paddingVertical: 14,
    paddingHorizontal: 70,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,

    elevation: 4,
    alignSelf: "center",
  },
  applyText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
});
