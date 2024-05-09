import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function DetailsScreen({ route, index }) {
  const navigation = useNavigation();
  const item = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.iconAction}>
            <TouchableOpacity onPress={() => navigation.goBack("Home")}>
              <AntDesign name="left" size={32} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>Detalhes do Pet</Text>
            <TouchableOpacity onPress={() => {}}>
              <Ionicons name="ellipsis-vertical" size={32} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={styles.subtitle}>Visualize com mais detalhe o pet</Text>
        </View>
      </View>

      {/* Imagem do animal selecionado */}
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 16,
          borderRadius: 16,
          bottom: 10,
        }}
      >
        <Image
          key={index}
          source={item.img}
          style={{
            width: "95%",
            height: 250,
            borderRadius: 16,
            marginBottom: 10,
            bottom: 8,
          }}
        />
      </View>
      {/* Informações do animal selecionado */}
      <View style={styles.body}>
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyInfoTitle}>{item.nome}</Text>
          <Text style={styles.bodyInfoSubtitle}>
            <Feather name="map-pin" size={14} color="#a0a0a0" />{" "}
            {item.localidade}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <View style={styles.bodyInfo}>
              <Text style={styles.bodyInfoText}>
                {item.sexo}{" "}
                <Text style={{ textAlign: "center", color: "#a0a0a0" }}>
                  Sexo
                </Text>
              </Text>
            </View>
            <View style={styles.bodyInfo}>
              <Text style={styles.bodyInfoText}>
                {item.idade}{" "}
                <Text style={{ textAlign: "center", color: "#a0a0a0" }}>
                  Idade
                </Text>
              </Text>
            </View>
            <View style={styles.bodyInfo}>
              <Text style={styles.bodyInfoText}>
                {item.isVacinado}{" "}
                <Text style={{ textAlign: "center", color: "#a0a0a0" }}>
                  Vacinado
                </Text>
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#ece6f6",
              marginHorizontal: 8,
              left: 12,
              borderRadius: 16,
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View
                style={{
                  backgroundColor: "#934fec",
                  height: 50,
                  width: 50,
                  left: 20,
                  top: 25,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 12,
                }}
              >
                <Feather name="user" size={24} color="#fff" />
              </View>
              <View
                style={{
                  backgroundColor: "#fff",
                  height: 50,
                  width: 50,
                  top: 25,
                  left: 60,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 12,
                }}
              >
                <AntDesign name="message1" size={24} color="#934fec" />
              </View>
              <TouchableOpacity onPress={() => {}}>
                <View
                  style={{
                    backgroundColor: "#fff",
                    height: 50,
                    width: 50,
                    top: 25,
                    right: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 12,
                  }}
                >
                  <AntDesign name="phone" size={24} color="#934fec" />
                </View>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                marginLeft: 80,
                bottom: 24,
                fontSize: 18,
                fontWeight: "700",
              }}
            >
              Fernanda
            </Text>
            <Text
              style={{
                marginLeft: 80,
                bottom: 24,
                fontSize: 14,
                fontWeight: "500",
                color: "#a0a0a0",
              }}
            >
              Zoonose
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          Alert.alert("Adoção", "Você quer adotar esse animal?", [
            {
              text: "Cancelar",
              onPress: () => Alert.alert("Adoção cancelado!"),
              style: "cancel",
            },
            {
              text: "Adotar",
              onPress: () => Alert.alert("Adotado com sucesso!"),
            },
          ])
        }
      >
        <Text style={styles.btnText}>Adotar {item.nome}</Text>
      </TouchableOpacity>
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
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    color: "#a0a0a0",
    margin: 10,
  },
  hero: {
    flex: 0.7,
    padding: 16,
    borderRadius: 16,
    margin: 12,
    height: 200,
    width: 300,
  },
  heroImg: {
    width: "90%",
    height: 200,
    borderRadius: 16,
  },
  body: {
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    marginRight: 24,
  },
  bodyContainer: {
    flexDirection: "column",
    margin: 8,
  },
  bodyInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: "#ece6f6",
    marginBottom: 12,
    borderRadius: 12,
    marginLeft: 20,
    width: 100,
    left: 2,
  },
  bodyInfoTitle: {
    fontSize: 22,
    fontWeight: "700",
    lineHeight: 20,
    marginHorizontal: 24,
    color: "#312b54",
  },
  bodyInfoSubtitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#a0a0a0",
    marginHorizontal: 24,
  },
  bodyInfoText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#312b54",
    textAlign: "center",
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#56409e",
    height: 50,
    width: "90%",
    borderRadius: 12,
    marginHorizontal: 20,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    justifyContent: "center",
  },
});
