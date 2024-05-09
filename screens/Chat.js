import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ChatScreen() {
  const navigation = useNavigation();
  const [mensagem, setMensagem] = useState("");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.iconAction}>
            <TouchableOpacity onPress={() => navigation.goBack("Home")}>
              <AntDesign name="left" size={32} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>Chat</Text>
            <TouchableOpacity onPress={() => {}}>
              <Ionicons name="ellipsis-vertical" size={32} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={styles.subtitle}>Tire suas dúvidas aqui!</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.bodyInfo}>
          <Image
            source={require("../assets/icons/avatar_01.png")}
            style={{ height: 60, width: 60, bottom: 4 }}
          />
          <Text style={styles.bodyText}>
            Olá, Bom dia!{"\n"}Porque devo adotar um animal?
          </Text>
        </View>
        <View style={styles.bodyInfo}>
          <Image
            source={require("../assets/icons/avatar_02.png")}
            style={{ height: 60, width: 60, bottom: 4 }}
          />
          <Text style={styles.bodyText}>
            Porque você vai estar dando um lar{"\n"}a ele.
          </Text>
        </View>
        <View style={styles.bodyInfo}>
          <Image
            source={require("../assets/icons/avatar_03.png")}
            style={{ height: 60, width: 60, bottom: 4 }}
          />
          <Text style={styles.bodyText}>
            Como posso ser voluntário dessa{"\n"}causa animal?
          </Text>
        </View>
        <View style={styles.bodyInfo}>
          <Image
            source={require("../assets/icons/avatar_02.png")}
            style={{ height: 60, width: 60, bottom: 4 }}
          />
          <Text style={styles.bodyText}>
            Você pode estar entrando em contato{"\n"}para saber mais e assim
            estar pre-{"\n"}enchendo um formulário.
          </Text>
        </View>
      </View>
      <View style={styles.input}>
        <Text style={styles.inputLabel}>Mensagem</Text>

        <TextInput
          value={mensagem}
          onChangeText={(msg) => setMensagem(msg)}
          style={{
            height: 40,
            marginHorizontal: 18,
            backgroundColor: "#eee",
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => {}}>
        <Text style={styles.btnText}>Enviar</Text>
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
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    color: "#a0a0a0",
    margin: 10,
  },
  body: {
    height: 490,
    width: "90%",
    backgroundColor: "#fff",
    marginHorizontal: 18,
    borderRadius: 8,
    alignContent: "center",
    justifyContent: "center",
  },
  bodyInfo: {
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: "#bfc1d9",
    borderRadius: 8,
    padding: 4,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  bodyText: {
    color: "#fff",
    top: 8,
  },
  input: {
    margin: 10,
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#56409e",
    height: 50,
    width: "90%",
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 16,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    justifyContent: "center",
  },
  input: {
    marginTop: 20,
  },
  inputControl: {
    height: 44,
    backgroundColor: "#eee",
    paddingLeft: 110,
    paddingRight: 24,
    borderRadius: 12,
    fontSize: 15,
    color: "#222",
    fontWeight: "500",
    marginHorizontal: 16,
  },
  inputLabel: {
    position: "absolute",
    top: 0,
    left: 8,
    bottom: 0,
    zIndex: 9,
    width: 110,
    lineHeight: 44,
    marginHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 13,
    fontWeight: "500",
    color: "#c0c0c0",
  },
});
