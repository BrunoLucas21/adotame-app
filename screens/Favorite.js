import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { dadosAnimais } from "../contents";

export default function FavoriteScreen() {
  const navigation = useNavigation();

  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (animalId, isFavorite) => {
    if (isFavorite) {
      setFavorites([
        ...dadosAnimais,
        { id: animalId, name: `Animal ${animalId}` },
      ]);
    } else {
      setFavorites(dadosAnimais.filter((animal) => animal.id !== animalId));
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.iconAction}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="left" size={32} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>Favoritos</Text>
            <TouchableOpacity onPress={() => {}}>
              <Ionicons name="ellipsis-vertical" size={32} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={styles.subtitle}>Liste seus animais favoritos</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.favorites}>
            {dadosAnimais.map((animal) => (
              <View key={animal.id} style={styles.animalContainer}>
                <Image
                  source={dadosAnimais.find((data) => data.id === animal.id).img}
                  style={styles.animalImage}
                  resizeMode="cover"
                />
                <Text style={styles.animalName}>{animal.name}</Text>
              </View>
            ))}
          </View>
        </ScrollView>

        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => setFavorites([])}
        >
          <Text style={styles.btnText}>Limpar Favoritos</Text>
        </TouchableOpacity>
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
    marginBottom: 12,
  },
  iconAction: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    color: "#56409e",
    fontWeight: "600",
    textAlign: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    color: "#a0a0a0",
    marginVertical: 10,
  },
  favorites: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  animalContainer: {
    marginBottom: 16,
    alignItems: "center",
  },
  animalImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  animalName: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  btnContainer: {
    alignSelf: "center",
    backgroundColor: "#56409e",
    borderWidth: 1,
    borderColor: "#56409e",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    bottom: 40,
    width: '100%'
  },
  btnText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
  },
});
