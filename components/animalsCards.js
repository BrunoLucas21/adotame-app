import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function AnimalsCards({ item, index }) {
  const navigation = useNavigation();

  return (
    <View key={index} style={styles.cards}>
      <Image
        source={{ uri: item.img }}
        style={styles.cardsImg}
        resizeMode="cover"
        alt="imagem"
      />
      <View style={styles.cardsBody}>
        <Text style={styles.cardsTitle}>{item.nome}</Text>
        <Text style={styles.cardsSubtitle}>
          <Feather name="" size={14} color="#9eadba" /> {item.idade}
        </Text>
        <Text style={styles.cardsSubtitle}>
          <Feather name="map-pin" size={14} color="#9eadba" /> {item.localidade}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Details", { ...item })}
        style={styles.btn}
      >
        <Text style={styles.btnText}>Adotar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cards: {
    backgroundColor: "#fff",
    paddingHorizontal: 14,
    paddingVertical: 14,
    marginBottom: 16,
    padding: 4,
    borderRadius: 16,
  },
  cardsBody: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  cardsTitle: {
    fontSize: 21,
    fontWeight: "700",
    lineHeight: 20,
    color: "#222",
    marginBottom: 8,
  },
  cardsImg: {
    width: "100%",
    height: 200,
    borderRadius: 12,
  },
  cardsSubtitle: {
    fontSize: 15,
    fontWeight: "500",
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e6e7fa',
    height: 40,
    width: '100%',
    borderRadius: 16
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    justifyContent: 'center'
  }
});
