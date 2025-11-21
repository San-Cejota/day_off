import React, { useState } from "react";
import {View, Text,TextInput,TouchableOpacity,ScrollView,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { TabsParamList } from "../navigation/types";

type Props = BottomTabScreenProps<TabsParamList, "CreateJob">;

export default function CreateJobScreen({ navigation }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Header */}
      <View style={{ flexDirection: "row", alignItems: "center", padding: 20 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={26} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "600", marginLeft: 10 }}>
          Crea un anuncio de empleo
        </Text>
      </View>

      {/* Card */}
      <View
        style={{
          backgroundColor: "#fff",
          marginHorizontal: 20,
          padding: 20,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: "#dedede",
        }}
      >
        <Text style={{ textAlign: "center", marginBottom: 10, color: "#666" }}>
          Información sobre el anuncio
        </Text>

        {/* Título */}
        <Text style={{ marginTop: 10 }}>Título:</Text>
        <TextInput placeholder="Título del trabajo" value={title} onChangeText={setTitle}
        style={{
            backgroundColor: "#d6f5f5",
            padding: 10,
            marginTop: 5,
            borderRadius: 8,
          }}
        />

        {/* Descripción */}
        <Text style={{ marginTop: 15 }}>Descripción:</Text>
        <TextInput placeholder="Describe las tareas y requisitos..." value={description} onChangeText={setDescription}multiline
          style={{
            backgroundColor: "#eee",
            padding: 10,
            marginTop: 5,
            borderRadius: 8,
            height: 100,
            textAlignVertical: "top",
          }}
        />
      </View>

      {/* Otros campos */}
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <Text>Nombre del negocio:</Text>
        <TextInput placeholder="Ej: Coffe Off - Cafetería" value={businessName} onChangeText={setBusinessName}
            style={{
            backgroundColor: "#eee",
            padding: 10,
            marginTop: 5,
            borderRadius: 8,
          }}
        />

        <Text style={{ marginTop: 15 }}>Ubicación:</Text>
        <TextInput placeholder="Ej: Poblado" value={location} onChangeText={setLocation}
          style={{
            backgroundColor: "#eee",
            padding: 10,
            marginTop: 5,
            borderRadius: 8,
          }}
        />

        <Text style={{ marginTop: 15 }}>Salario:</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#eee",
            borderRadius: 8,
            marginTop: 5,
            paddingHorizontal: 10,
          }}
        >
          <TextInput placeholder="$45.000..." value={price}onChangeText={setPrice} keyboardType="numeric"
            style={{ 
                flex: 1, 
                paddingVertical: 10 }}
          />
          <Text style={{ marginLeft: 5 }}></Text>
        </View>
      </View>

      {/* Botón Publicar */}
      <TouchableOpacity
        onPress={() => console.log("Publicar anuncio")}
        style={{
          backgroundColor: "#000",
          padding: 15,
          margin: 20,
          borderRadius: 10,
        }}
      >
        <Text style={{ 
            textAlign: "center", 
            color: "#fff", 
            fontSize: 16 }}>
          Publicar
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
