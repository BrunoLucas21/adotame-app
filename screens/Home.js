import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { tipoCategorias, dadosAnimais } from "../components/contents";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
              Localização{'\n'}Campina Grande - PB
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Image
                source={require("../assets/icons/avatar.png")}
                style={{ height: 60, width: 60, bottom: 18 }}
              />
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
            {tipoCategorias.map(({ title, icon }) => (
              <View style={styles.statsItem}>
                <TouchableOpacity style={styles.statsItemBtn}>
                  <Text style={styles.statsItemLabel}>{title}</Text>

                  <Image source={icon} style={{ height: 30, width: 30 }} />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>

        <Text style={styles.title}>Animais Disponíveis</Text>

        <ScrollView contentContainerStyle={styles.cardsContainer} showsVerticalScrollIndicator={false}>
          {dadosAnimais.map(({ img, nome, localidade }, index) => (
            <View key={index} style={styles.cards}>
              <TouchableOpacity onPress={() => navigation.navigate("Details")}>
                <Image
                  source={{ uri: img }}
                  style={styles.cardsImg}
                  resizeMode="cover"
                  alt="imagem"
                />
                <View style={styles.cardsBody}>
                  <Text style={styles.cardsTitle}>{nome}</Text>
                  <Text style={styles.cardsSubtitle}>
                    <Feather name="map-pin" size={14} color="#9eadba" />{" "}
                    {localidade}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
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
    textAlign: 'center',
    justifyContent: 'center',
    color: "#56409e",
    fontWeight: '600',
    bottom: 4
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
  statsItem: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    marginRight: 12,
    borderRadius: 12,
  },
  statsItemLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: "#4e4a6d",
    marginLeft: 8,
    marginRight: "auto",
  },
  statsItemBtn: {
    alignItems: "center",
    justifyContent: "center",
  },
  cardsContainer: {
    padding: 14,
  },
  cards: {
    borderBottomWidth: 1,
    borderColor: "#e3e3e3",
    marginBottom: 16,
  },
  cardsBody: {
    paddingVertical: 16,
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
});
