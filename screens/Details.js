import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function DetailsScreen() {
  const navigation = useNavigation();
  const { params } = useRoute();
  let item = params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.iconAction}>
            <TouchableOpacity onPress={() => navigation.goBack("Home")}>
              <AntDesign name="left" size={32} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>Detalhes do Pet</Text>
          </View>
          <Text style={styles.subtitle}>Visualize com mais detalhe o pet</Text>
        </View>
      </View>

      {/* Imagem do animal selecionado */}
      <View style={styles.hero}>
        <Image 
          source={item.img} 
          style={styles.heroImg} 
        />
      </View>

      {/* Informações do animal selecionado */}
      <View style={styles.body}>
        <View style={styles.bodyInfo}>
          <Text>{}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
  },
  header: {
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  iconAction: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 22,
    color: "#56409e",
    fontWeight: "600",
    marginRight: 100,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    color: "#a0a0a0",
    margin: 10,
  },
  hero: {
    padding: 16,
    borderRadius: 16,
    margin: 12,
  },
  heroImg: {
    width: "90%",
    height: 200,
    borderRadius: 16,
  },
  body: {

  }
});
