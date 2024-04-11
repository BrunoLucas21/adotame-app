import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ChatScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.iconAction}>
            <TouchableOpacity onPress={() => navigation.goBack("Home")}>
              <AntDesign name="left" size={32} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>Chat</Text>
          </View>
          <Text style={styles.subtitle}>Tire suas dúvidas sobre a adoção</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.bodyInfo}>
          <View style={styles.infoEnter}>
            <Text style={styles.input}>
              Olá Bruno, Bom dia!{"\n"}Me fala qual a sua dúvida?
            </Text>
          </View>
          <View style={styles.infoExit}>
            <Text style={styles.input}>
              Quero adotar um cão.{"\n"}O que eu preciso fazer?
            </Text>
          </View>
          <View style={styles.infoEnter}>
            <Text style={styles.input}>
              O procedimento é o seguinte!{"\n"}Você vai no tela principal e escolher um dos animais
            </Text>
          </View>
          <View style={styles.infoExit}>
            <Text style={styles.input}>
              Obrigado!
            </Text>
          </View>
        </View>
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
    marginRight: 150,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    color: "#a0a0a0",
    margin: 10,
  },
  body: {
    height: 500,
    width: "90%",
    backgroundColor: "#fff",
    marginHorizontal: 18,
    borderRadius: 16,
  },
  bodyInfo: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
  infoEnter: {
    backgroundColor: "#282748",
    height: 90,
    width: "95%",
    marginHorizontal: 12,
    marginVertical: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderTopRightRadius: 12,
  },
  infoExit: {
    backgroundColor: "#564f89",
    height: 70,
    width: "95%",
    marginHorizontal: 12,
    marginVertical: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderTopLeftRadius: 12,
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
    backgroundColor: "#934fec",
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
});
