import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { Feather, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function AnimalsCards({ item, index }) {
  const navigation = useNavigation();
  const [favoritado, setFavoritado] = useState(false);

  const handlePress = () => {
    setFavoritado(!favoritado);
  };

  return (
    <View key={index} style={styles.cards}>
      <TouchableOpacity onPress={() => navigation.navigate("Details", item)}>
        <Image
          source={item.img}
          style={styles.cardsImg}
          resizeMode="cover"
          alt="imagem"
        />
        <View
          color={["transparent", "rgba(0, 0, 0, 0.6)"]}
          style={styles.iconFavorite}
        >
          <TouchableOpacity onPress={handlePress}>
            <AntDesign name="heart" size={25} color={favoritado ? 'red' : 'white'} />
          </TouchableOpacity>
        </View>
        <View style={styles.cardsBody}>
          <Text style={styles.cardsTitle}>{item.nome}</Text>
          <Text style={styles.cardsSubtitle}>
            <Feather name="map-pin" size={14} color="#9eadba" />{" "}
            {item.localidade}
          </Text>
          <View style={styles.cardsBox}>
            <View
              style={{
                backgroundColor: "#e1e8fe",
                height: 27,
                width: 75,
                borderRadius: 12,
              }}
            >
              <Text style={styles.cardsTextSexo}>{item.sexo}</Text>
            </View>
            <View
              style={{
                backgroundColor: "#fef3de",
                height: 27,
                width: 75,
                borderRadius: 12,
                marginHorizontal: 10,
              }}
            >
              <Text style={styles.cardsTextIdade}>{item.idade}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cards: {
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 16,
    padding: 4,
    borderRadius: 16,
  },
  cardsBody: {
    paddingVertical: 12,
    paddingHorizontal: 4,
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
  cardsBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 150,
    margin: 2,
  },
  cardsTextSexo: {
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    justifyContent: "center",
    color: "#567ff7",
  },
  cardsTextIdade: {
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    justifyContent: "center",
    color: "#f9c767",
  },
  iconFavorite: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 4,
    height: 45,
    width: 45,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});
