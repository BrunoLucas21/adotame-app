import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export default function NotificationScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
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
});

