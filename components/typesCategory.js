import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";

export default function TypesCategory({ item, index }) {
  return (
    <View style={styles.statsItem}>
      <TouchableOpacity key={index} style={styles.statsItemBtn}>
        <Text style={styles.statsItemLabel}>{item.title}</Text>

        <Image source={item.icon} style={{ height: 30, width: 30 }} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
