import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { tipoCategorias, dadosAnimais } from "../contents";
import AnimalsCards from "../components/animalsCards";
import TypesCategory from "../components/typesCategory";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (animalId, isFavorite) => {
    if (isFavorite) {
      setFavorites([...favorites, animalId]);
    } else {
      setFavorites(favorites.filter((id) => id !== animalId));
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.iconAction}>
            <TouchableOpacity
              onPress={() => {
                // Menu
              }}
            >
              <Feather name="menu" size={32} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>
              Localização{"\n"}Campina Grande - PB
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
              <Feather name="bell" size={32} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.search}>
          <View style={styles.searchInput}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Buscar animal"
                placeholderTextColor="#9eadba"
              />
              <View style={styles.inputIcon}>
                <Feather name="search" size={16} color="#9eadba" />
              </View>
            </View>
          </View>
        </View>

        <Text style={styles.title}>Categorias</Text>

        <View style={styles.stats}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {tipoCategorias.map((item, index) => (
              <TypesCategory key={index} item={item} />
            ))}
          </ScrollView>
        </View>

        <Text style={styles.title}>Animais Disponíveis</Text>

        <ScrollView
          contentContainerStyle={styles.cardsContainer}
          showsVerticalScrollIndicator={false}
        >
          {dadosAnimais.map((item, index) => (
            <AnimalsCards
              key={index}
              item={item}
              onToggleFavorite={toggleFavorite}
              isFavorite={favorites.includes(item.id)}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  header: {
    marginVertical: 10,
  },
  headerTitle: {
    textAlign: "center",
    justifyContent: "center",
    color: "#56409e",
    fontWeight: "600",
    bottom: 4,
  },
  iconAction: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
    marginTop: 24,
    marginBottom: 16,
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    marginRight: 12,
  },
  inputWrapper: {
    position: "relative",
    width: "100%",
  },
  input: {
    height: 44,
    backgroundColor: "#fff",
    paddingLeft: 44,
    paddingRight: 24,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
  },
  inputIcon: {
    position: "absolute",
    width: 44,
    height: 44,
    top: 0,
    left: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  stats: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardsContainer: {
    padding: 12,
  },
});
