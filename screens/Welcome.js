import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.hero}>
        <Image
          source={require("../assets/images/welcome.png")}
          style={styles.heroImg}
        />
      </View>

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>
            Faça sua adoção{"\n"}com{" "}
            <View style={styles.appName}>
              <Text style={styles.appNameText}>Adota.me</Text>
            </View>
          </Text>

          <Text style={styles.message}>
            Nosso aplicativo de adoção de animais domésticos
          </Text>
        </View>

        <View style={styles.areaBtn}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.btnText}>Registrar-se</Text>
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    justifyContent: "space-between",
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    lineHeight: 40,
    fontWeight: "500",
    color: "#816bcf",
    textAlign: "center",
    marginBottom: 12,
  },
  message: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: "400",
    color: "#9992a7",
    textAlign: "center",
  },
  hero: {
    padding: 16,
    borderRadius: 16,
    margin: 12,
  },
  heroImg: {
    width: "100%",
    height: 400,
    borderRadius: 16
  },
  appName: {
    backgroundColor: "#fff2dd",
    paddingHorizontal: 6,
    transform: [
      {
        rotate: "-5deg",
      },
    ],
  },
  appNameText: {
    fontSize: 28,
    fontWeight: "700",
    color: "#473f66",
  },
  areaBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    backgroundColor: "#56409e",
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    width: '48%'
  },
  btnText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#fff",
  },
});
