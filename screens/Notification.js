import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export default function NotificationScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.iconAction}>
            <TouchableOpacity onPress={() => navigation.goBack("Home")}>
              <AntDesign name="left" size={32} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>Notificação</Text>
          </View>
          <Text style={styles.subtitle}>Veja as mensagens abaixo</Text>
        </View>
        {/* Mensagens */}
        <View style={styles.messages}>
          <View style={styles.contexts}>
            <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
              <View style={styles.iconAvatar}>
                <Image
                  source={require("../assets/icons/avatar_01.png")}
                  style={{ height: 60, width: 60, bottom: 4 }}
                />
                <View>
                  <Text style={styles.title}>Ana Maria</Text>
                  <Text style={styles.subtitleText}>Mensagem nova</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
              <View style={styles.iconAvatar}>
                <Image
                  source={require("../assets/icons/avatar_03.png")}
                  style={{ height: 60, width: 60, bottom: 4 }}
                />
                <View>
                  <Text style={styles.title}>Maria Clara</Text>
                  <Text style={styles.subtitleText}>Mensagem nova</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
              <View style={styles.iconAvatar}>
                <Image
                  source={require("../assets/icons/avatar_05.png")}
                  style={{ height: 60, width: 60, bottom: 4 }}
                />
                <View>
                  <Text style={styles.title}>Fernanda Silva</Text>
                  <Text style={styles.subtitleText}>Mensagem nova</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
              <View style={styles.iconAvatar}>
                <Image
                  source={require("../assets/icons/avatar_02.png")}
                  style={{ height: 60, width: 60, bottom: 4 }}
                />
                <View>
                  <Text style={styles.title}>Antonio Souza</Text>
                  <Text style={styles.subtitleText}>Mensagem nova</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
              <View style={styles.iconAvatar}>
                <Image
                  source={require("../assets/icons/avatar_04.png")}
                  style={{ height: 60, width: 60, bottom: 4 }}
                />
                <View>
                  <Text style={styles.title}>Fernando Costa</Text>
                  <Text style={styles.subtitleText}>Mensagem nova</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.btnExcluir}>
                <Text style={styles.btnExcluirText}>Excluir</Text>
              </View>
            </TouchableOpacity>
          </View>
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
    marginRight: 125,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    color: "#a0a0a0",
    margin: 10,
  },
  messages: {
    marginHorizontal: 8,
    marginVertical: 8,
  },
  contexts: {
    flexDirection: "column",
  },
  iconAvatar: {
    fontSize: 24,
    marginHorizontal: 8,
    marginVertical: 8,
    padding: 8,
    flexDirection: "row",
    display: "flex",
    backgroundColor: "#fff",
    borderRadius: 12,
  },
  subtitleText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#a0a0a0",
  },
  btn: {
    marginHorizontal: 8,
    marginVertical: 8,
  },
  btnExcluir: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#56409e",
    borderWidth: 1,
    borderColor: "#56409e",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  btnExcluirText: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 26,
    color: '#fff'
  },
});
