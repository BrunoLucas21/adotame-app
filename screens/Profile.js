import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import ActionModal from "../components/actionModal";

export default function ProfileScreen() {
  const navigation = useNavigation();
  const [name] = useState("Bruno");
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.iconAction}>
            <TouchableOpacity onPress={() => navigation.goBack("Home")}>
              <AntDesign name="left" size={32} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Olá, {name}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Image
                source={require("../assets/icons/avatar.png")}
                style={{ height: 60, width: 60, bottom: 14 }}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.subtitle}>Veja as mensagens abaixo</Text>

          <Image
            source={require("../assets/images/perfil.png")}
            style={{ height: 200, width: "100%", borderRadius: 16 }}
          />
        </View>

        <View style={styles.bodyContainer}>
          <ScrollView>
            <TouchableOpacity
              onPress={() => navigation.navigate("Notification")}
            >
              <View style={styles.bodyBox}>
                <Text style={styles.bodyTitle}>
                  <Feather name="bell" size={16} color="#56409e" /> Notificações
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Donation")}>
              <View style={styles.bodyBox}>
                <Text style={styles.bodyTitle}>
                  <MaterialIcons name="attach-money" size={16} color="#56409e" /> Doar
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Favorite")}>
              <View style={styles.bodyBox}>
                <Text style={styles.bodyTitle}>
                  <Feather name="heart" size={16} color="#56409e" /> Meus
                  Favoritos
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setVisibleModal(true)}>
              <View style={styles.bodyBox}>
                <Text style={styles.bodyTitle}>
                  <Feather name="phone" size={16} color="#56409e" /> Denunciar
                </Text>
              </View>
            </TouchableOpacity>

            <Modal
              visible={visibleModal}
              transparent={true}
              onRequestClose={() => setVisibleModal(false)}
            >
              <ActionModal handleClose={() => setVisibleModal(false)} />
            </Modal>

            <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
              <View style={styles.bodyBox}>
                <Text style={styles.bodyTitle}>
                  <Feather name="settings" size={16} color="#56409e" />{" "}
                  Configurações
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
              <View style={styles.bodyBox}>
                <Text style={styles.bodyTitle}>
                  <Feather name="log-out" size={16} color="#56409e" /> Sair
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
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
    marginVertical: 16,
  },
  headerTitle: {
    fontSize: 22,
    color: "#56409e",
    fontWeight: "600",
  },
  iconAction: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 22,
    color: "#56409e",
    fontWeight: "600",
    textAlign: "center",
    justifyContent: "center",
    marginLeft: 16,
  },
  bodyContainer: {
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
  },
  bodyBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    marginBottom: 12,
    borderRadius: 12,
  },
  bodyTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#56409e",
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    color: "#a0a0a0",
    marginVertical: 8,
    bottom: 18,
  },
});
