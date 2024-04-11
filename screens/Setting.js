import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SECTIONS = [
  {
    header: "Preferências",
    items: [
      { id: "language", icon: "globe", label: "Linguagem", type: "select" },
      { id: "darkMode", icon: "moon", label: "Modo Escuro", type: "toggle" },
      { id: "wifi", icon: "wifi", label: "Use Wi-Fi", type: "toggle" },
    ],
  },
  {
    header: "Ajuda",
    items: [
      { id: "bug", icon: "flag", label: "Reportar Bug", type: "link" },
      { id: "contact", icon: "mail", label: "Contate-nos ", type: "link" },
    ],
  },
  {
    header: "Conteúdo",
    items: [
      { id: "save", icon: "save", label: "Salvou", type: "link" },
      {
        id: "download",
        icon: "download",
        label: "Transferências",
        type: "link",
      },
    ],
  },
];

export default function SettingScreen() {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    language: "Português",
    darkMode: true,
    wifi: false,
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <View style={styles.iconAction}>
            <TouchableOpacity onPress={() => navigation.goBack("Home")}>
              <AntDesign name="left" size={32} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>Configurações</Text>
          </View>
          <Text style={styles.subtitle}>Atualize de sua preferência aqui</Text>
        </View>

        {SECTIONS.map(({ header, items }) => (
          <View style={styles.section} key={header}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{header}</Text>
            </View>

            <View style={styles.sectionBody}>
              {items.map(({ label, id, type, icon }, index) => (
                <View
                  style={[
                    styles.rowWrapper,
                    index === 0 && { borderTopWidth: 0 },
                  ]}
                  key={id}
                >
                  <TouchableOpacity onPress={() => {}}>
                    <View style={styles.row}>
                      <Feather
                        name={icon}
                        color="#616161"
                        size={22}
                        style={{ marginRight: 12 }}
                      />

                      <Text style={styles.rowLabel}>{label}</Text>

                      <View style={styles.rowSpacer} />

                      {type === "select" && (
                        <Text style={styles.rowValue}>{form[id]}</Text>
                      )}

                      {type === "toggle" && (
                        <Switch
                          value={form[id]}
                          onValueChange={(value) =>
                            setForm({ ...form, [id]: value })
                          }
                        />
                      )}

                      {["select", "link"].includes(type) && (
                        <Feather
                          name="chevron-right"
                          color="#ababab"
                          size={22}
                        />
                      )}
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
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
    marginRight: 100,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    color: "#a0a0a0",
    margin: 10,
  },
  section: {
    paddingTop: 12,
  },
  sectionHeader: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#a7a7a7",
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
  rowWrapper: {
    paddingLeft: 24,
    borderTopWidth: 1,
    borderColor: "#e3e3e3",
    backgroundColor: "#fff",
  },
  row: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingRight: 24,
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: "500",
    color: "#000",
  },
  rowSpacer: {
    flex: 1,
  },
  rowValue: {
    fontSize: 17,
    color: "#616161",
    marginRight: 4,
  },
});
